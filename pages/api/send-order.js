import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { orderDetails } = req.body;

    const message = `
    Nuevo pedido de LaBellaPizza.es:
    Items pedidos:
    ${orderDetails.items.map(item => `${item.quantity} x ${item.name}`).join('\n')}
    Total: ${orderDetails.total}
    Detalles del cliente:
      Nombre: ${orderDetails.name}
      Direccion: ${orderDetails.address}
      Telefono: ${orderDetails.phone}
    `;

    try {

      await client.messages.create({
        body: message,
        from: process.env.TWILIO_WHATSAPP_NUMBER,
							to: process.env.NEXT_PUBLIC_RECEIVER_WHATSAPP_NUMBER,
      });
      res.status(200).json({ success: true });

    } catch (error) {

      console.error("from LaBellaPizza App: Error sending message!", error);
      res.status(500).json({ error: 'Failed to send messageeee' });

    }
  } else {

    res.status(405).json({ error: 'Method not allowed' });

  }
}
