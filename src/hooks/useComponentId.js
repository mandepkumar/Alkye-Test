import { useId } from "react";

const useComponentId = (prefix = "cid") => {
  const id = useId();
  let counter = 0;

  const nextUniqueId = () => {
    return `${prefix}-${id}-${counter++}`;
  };
  return { id, nextUniqueId };
};

export default useComponentId;
