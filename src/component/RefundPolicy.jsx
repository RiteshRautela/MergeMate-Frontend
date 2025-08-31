const RefundPolicy = () => {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">REFUND POLICY</h1>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
          <li>We offer a <strong>7 days "NO QUESTIONS ASKED"</strong> refund policy.</li>
          <li>Within 7 days of your course purchase, you can request a refund anytime.</li>
          <li>
            For refunds, please mail us at{" "}
            <a href="mailto:support@abc.com" className="text-blue-600 underline">
              
              support@namastedev.com
            </a>.
          </li>
          <li>
            In case of a course bundle, a refund will be initiated for the entire
            course bundle, not for individual courses.
          </li>
          <li>
            After the refund is initiated, it may take around <strong>5-7 business days</strong>{" "}
            for the amount to reflect in your bank account.
          </li>
          <li>
            Once a refund is processed, no further refunds will be provided for the same
            purchase/course.
          </li>
          <li>Purchases made using the <strong>"Gift-a-course"</strong> feature are not eligible for a refund.</li>
          <li>Refunds are only provided if you have access to the course.</li>
          <li>
            If your email ID is found to be suspicious or involved in malicious activity,
            a refund will not be initiated.
          </li>
        </ul>
      </div>
    );
  };
  
  export default RefundPolicy;
  