import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { orderDetails } = req.body;

			// const itemsString = orderDetails.items.map(item => `- ${item.name} x ${item.quantity}`).join('\n');

			// const templateParameters = {
			// 	1: itemsString,
			// 	2: orderDetails.total,
			// 	3: orderDetails.name,
			// 	4: orderDetails.address,
			// 	5: orderDetails.phone
			// };

			const message = `Nuevo pedido:
			 ${orderDetails.items.map(item => `${item.name} x ${item.quantity}`).join('\n')}
			 Total: ${orderDetails.total}
			 Nombre: ${orderDetails.name}
			 Dir: ${orderDetails.address}
			 ${orderDetails.phone}: Tel`;

    try {

      await client.messages.create({
							from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
							body: message,
							to: `whatsapp:${process.env.NEXT_PUBLIC_RECEIVER_WHATSAPP_NUMBER}`,

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
