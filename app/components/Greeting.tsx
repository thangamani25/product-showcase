type Props = {
  name: string;
};

export default function Greeting({ name }: Props) {
  return <h2 className="greeting">Hello, {name}!</h2>;
}
