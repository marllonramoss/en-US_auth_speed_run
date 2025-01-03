import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailSenderAdapter {
  private readonly logger = new Logger(EmailSenderAdapter.name);
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail', // Serviço Gmail
      auth: {
        type: 'OAuth2',
        user: '', // Seu e-mail
        clientId: '', // Seu Client ID
        clientSecret: '', // Coloque seu Client Secret aqui
        refreshToken: '', // Coloque seu Refresh Token aqui
        accessToken: '', // Coloque seu Access Token aqui
      },
    });
  }

  async sendEmail(to: string, subject: string, content: string): Promise<void> {
    try {
      const info = await this.transporter.sendMail({
        from: `"Sua App" <svralkpro@gmail.com>`, // Nome do remetente
        to, // Destinatário
        subject, // Assunto do email
        text: content, // Texto simples do email
      });

      this.logger.log(`E-mail enviado com sucesso: ${info.messageId}`);
    } catch (error) {
      this.logger.error('Erro ao enviar e-mail', error.stack);
      throw new Error('Não foi possível enviar o e-mail.');
    }
  }
}
