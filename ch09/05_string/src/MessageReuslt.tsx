import type { DetailedHTMLProps, HTMLAttributes } from "react";

type MesaageResultProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export default function MesaageResult(props: MesaageResultProps) {
  return <div {...props} />;
}
