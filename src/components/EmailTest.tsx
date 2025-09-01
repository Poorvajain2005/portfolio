import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export const EmailTest = () => {
  const [isTesting, setIsTesting] = useState(false);
  const { toast } = useToast();

  const testEmailJS = async () => {
    setIsTesting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      console.log('=== EMAILJS TEST START ===');
      console.log('Environment variables check:');
      console.log('Service ID:', serviceId ? '✅ SET' : '❌ NOT SET');
      console.log('Template ID:', templateId ? '✅ SET' : '❌ NOT SET');
      console.log('Public Key:', publicKey ? '✅ SET' : '❌ NOT SET');

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Missing environment variables. Please check your .env file.');
      }

      if (serviceId === 'your_service_id_here' ||
          templateId === 'your_template_id_here' ||
          publicKey === 'your_public_key_here') {
        throw new Error('Using placeholder values. Please update your .env file with real EmailJS credentials.');
      }

      console.log('Sending test email...');

      const testParams = {
        from_name: 'Test User',
        from_email: 'test@example.com',
        subject: 'EmailJS Test',
        message: 'This is a test message to verify EmailJS configuration.',
        to_name: 'Test Recipient',
      };

      const result = await emailjs.send(serviceId, templateId, testParams, publicKey);

      console.log('✅ EmailJS test successful!');
      console.log('Result:', result);

      toast({
        title: "✅ Test Successful!",
        description: "EmailJS is working correctly. Check your email for the test message.",
      });

    } catch (error) {
      console.error('❌ EmailJS test failed:', error);

      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';

      toast({
        title: "❌ Test Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsTesting(false);
      console.log('=== EMAILJS TEST END ===');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-4 max-w-sm">
      <h3 className="text-white font-semibold mb-2">EmailJS Test</h3>
      <p className="text-white/70 text-sm mb-3">
        Click to test your EmailJS configuration. Check console for details.
      </p>
      <Button
        onClick={testEmailJS}
        disabled={isTesting}
        className="w-full bg-blue-600 hover:bg-blue-700"
      >
        {isTesting ? 'Testing...' : 'Test EmailJS'}
      </Button>
    </div>
  );
};
