import nodemailer, { Transporter } from 'nodemailer'

import { IMailProvider } from '../imail-provider'

export class EtherealMailProvider implements IMailProvider {
	private client: Transporter
	constructor() {
		nodemailer
			.createTestAccount()
			.then(account => {
				const transporter = nodemailer.createTransport({
					host: account.smtp.host,
					port: account.smtp.port,
					secure: account.smtp.secure,
					auth: {
						user: account.user,
						pass: account.pass,
					},
				})

				this.client = transporter
			})
			.catch(err => console.log(err))
	}

	async sendMail(to: string, subject: string, body: string): Promise<void> {
		const message = await this.client.sendMail({
			to,
			from: 'Courses Platform <noreply@apl.com>',
			subject,
			text: body,
			html: body,
		})

		console.log('====================================')
		console.log('message sent: %s', message.messageID)
		console.log('====================================')

		console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message))
	}
}
