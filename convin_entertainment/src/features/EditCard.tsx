import React, { useEffect } from 'react';

const EditCard = (props: { setFooterStatus: (state: boolean) => void }) => {
  const { setFooterStatus } = props;
  useEffect(() => {
    setFooterStatus(true);
    return () => {
      setFooterStatus(false);
    };
  }, [setFooterStatus]);
  return <div>EditCard</div>;
};

export default EditCard;
