import React, { ReactChild, ReactNode } from 'react';
import PropTypes from 'prop-types';

interface Props {
  children: ReactNode;
  block?: boolean;
  paragraph?: boolean;
  strong?: boolean;
  underline?: boolean;
  delete?: boolean;
  color?: string;
  mark?: boolean;
  code?: boolean;
  style?: React.CSSProperties;
}

const Text = ({
  children,
  block,
  paragraph,
  strong,
  underline,
  delete: del,
  color,
  mark,
  code,
  ...props
}: Props) => {
  const Tag = block ? 'div' : paragraph ? 'p' : 'span';
  const fontStyle = {
    fontWeight: strong ? 'bold' : undefined,
    textDecoration: underline ? 'underline' : undefined,
    color,
  };

  if (mark) {
    children = <mark>{children}</mark>;
  }
  if (code) {
    children = <code>{children}</code>;
  }
  if (del) {
    children = <del>{children}</del>;
  }

  return (
    <Tag style={{ ...props.style, ...fontStyle }} {...props}>
      {children}
    </Tag>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  block: PropTypes.bool,
  paragraph: PropTypes.bool,
  delete: PropTypes.bool,
  code: PropTypes.bool,
  mark: PropTypes.bool,
  strong: PropTypes.bool,
  color: PropTypes.string,
};

export default Text;
