import fs from 'fs'

import nodemailer, { Transporter } from 'nodemailer'
import handlebars from 'handlebars'

import { IMailProvider } from '../imail-provider'

export class EtherealMailProvider implements IMailProvider {
	private client: Transporter | null = null
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

	async sendMail(
		to: string,
		subject: string,
		variables: any,
		path: string
	): Promise<void> {
		const templateFileContent = fs.readFileSync(path).toString('utf-8')

		const templateParse = handlebars.compile(templateFileContent)

		const templateHTML = templateParse(variables)

		const message = await this.client?.sendMail({
			to,
			from: 'Courses Platform <noreply@apl.com>',
			subject,
			html: templateHTML,
		})

		console.log('====================================')
		console.log('message sent: %s', message.messageID)
		console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message))
	}
}
