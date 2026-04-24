type Props = {
  num: string;
  title: string;
};

export function SectionHead({ num, title }: Props) {
  return (
    <div className="section-head">
      <span className="section-num">{num}</span>
      <h2 className="section-title">{title}</h2>
      <span className="section-line" />
    </div>
  );
}
