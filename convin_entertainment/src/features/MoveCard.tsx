import React, { useEffect } from 'react';

const MoveCard = (props: { setFooterStatus: (state: boolean) => void }) => {
  const { setFooterStatus } = props;
  useEffect(() => {
    setFooterStatus(true);
    return () => {
      setFooterStatus(false);
    };
  }, [setFooterStatus]);
  return <div>MoveCard</div>;
};

export default MoveCard;
