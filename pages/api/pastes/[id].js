import dbConnect from '../../../lib/dbConnect';
import Paste from '../../../models/Paste';
import { getCurrentTime } from '../../../lib/timeHelper';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET']);
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { id } = req.query;
        await dbConnect();

        const now = getCurrentTime(req);

        const paste = await Paste.findOne({
            _id: id,
            $or: [{ expiresAt: null }, { expiresAt: { $gt: now } }],
        });

        if (!paste) {
            return res.status(404).json({ error: 'Not found or expired' });
        }

        // Unlimited views
        if (paste.remainingViews === null) {
            return res.status(200).json({
                content: paste.content,
                remaining_views: null,
                expires_at: paste.expiresAt,
            });
        }

        if (paste.remainingViews <= 0) {
            return res.status(404).json({ error: 'View limit exceeded' });
        }

        const updatedPaste = await Paste.findOneAndUpdate(
            { _id: id, remainingViews: { $gt: 0 } },
            { $inc: { remainingViews: -1 } },
            { new: true }
        );

        if (!updatedPaste) {
            return res.status(404).json({ error: 'View limit exceeded' });
        }

        return res.status(200).json({
            content: updatedPaste.content,
            remaining_views: updatedPaste.remainingViews,
            expires_at: updatedPaste.expiresAt,
        });

    } catch (error) {
        console.error('GET /api/pastes/[id] error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
