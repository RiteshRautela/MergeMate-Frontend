const Contact = () => {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">CONTACT US</h1>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
          <li>
            For any queries or support, feel free to reach out to us via email:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <a
                  href="mailto:support@namastedev.com"
                  className="text-blue-600 underline"
                >
                  support@namastedev.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:gptc1961@gmail.com"
                  className="text-blue-600 underline"
                >
                  gptc1961@gmail.com
                </a>
              </li>
            </ul>
          </li>
          <li>
            Our team will get back to you within <strong>24-48 business hours</strong>.
          </li>
          <li>
            You can also connect with us through the contact form available on our
            website.
          </li>
        </ul>
      </div>
    );
  };
  
  export default Contact;
  