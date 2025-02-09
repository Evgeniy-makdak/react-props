export default function OurDesription({ title, description }) {
  return (
    <li>
      <div>
        <strong>{title}</strong>
      </div>
      <p style={{ whiteSpace: 'pre-line' }}>{description}</p>
    </li>
  );
}
