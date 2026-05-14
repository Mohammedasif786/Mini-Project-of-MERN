type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="rounded border border-red-300 bg-red-100 px-4 py-3 text-red-700">
      {message}
    </div>
  );
};

export default ErrorMessage;