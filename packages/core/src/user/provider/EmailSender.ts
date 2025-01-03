export interface EmailSender {
    sendEmail(to: string, subject: string, text: string): Promise<void>;
}
