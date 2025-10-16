import {
  Html,
  Body,
  Head,
  Heading,
  Container,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components';

type ContactEmailProps = {
  name: string;
  email: string;
  message: string;
};

export default function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Body style={{ backgroundColor: '#f6f9fc', fontFamily: 'Arial, sans-serif' }}>
        <Container
          style={{
            backgroundColor: '#ffffff',
            margin: '0 auto',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
          }}
        >
          <Section>
            <Heading style={{ color: '#1a202c', fontSize: '24px' }}>
              New Contact Form Submission
            </Heading>
            <Text style={{ color: '#4a5568', fontSize: '16px' }}>
              You received a new message from the contact form on your portfolio.
            </Text>
            <Hr style={{ borderColor: '#e2e8f0', margin: '20px 0' }} />
            <Text style={{ color: '#2d3748', fontSize: '16px', fontWeight: 'bold' }}>
              Sender Name:
            </Text>
            <Text style={{ color: '#4a5568', fontSize: '16px' }}>{name}</Text>
            <Text style={{ color: '#2d3748', fontSize: '16px', fontWeight: 'bold' }}>
              Sender Email:
            </Text>
            <Text style={{ color: '#4a5568', fontSize: '16px' }}>{email}</Text>
            <Text style={{ color: '#2d3748', fontSize: '16px', fontWeight: 'bold' }}>
              Message:
            </Text>
            <Text style={{ color: '#4a5568', fontSize: '16px' }}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
