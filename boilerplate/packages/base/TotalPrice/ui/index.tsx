import "./style.scss";

export const TotalPrice = ({ total }: { total: number }) => {
  return (
    <article className="total">
      <article className="total__details">
        <p className="total__text">totalt</p>
        <p className="total__tax">inkl 20% moms</p>
      </article>
      <p className="total__price">{total} SEK</p>
    </article>
  );
};
