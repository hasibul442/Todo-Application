
import speakeasy from 'speakeasy';
import qrcode from 'qrcode';

export const genarateQRCode = async (req, res) => {
    try {
        const secret = speakeasy.generateSecret();
        
        qrcode.toDataURL(secret.otpauth_url, function(err, data_url) {
            res.send({ data_url });
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}