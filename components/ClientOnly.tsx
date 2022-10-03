import React from "react";

type Props = {
  children: React.ReactNode;
  delegated?: boolean;
}

const ClientOnly = ({ children, ...delegated }: Props) => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <div {...delegated}>{children}</div>;
};

export default ClientOnly;
