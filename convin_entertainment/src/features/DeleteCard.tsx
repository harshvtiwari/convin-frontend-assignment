import React, { useEffect } from 'react';

const DeleteCard = (props: { setFooterStatus: (state: boolean) => void }) => {
  const { setFooterStatus } = props;
  useEffect(() => {
    setFooterStatus(true);
    return () => {
      setFooterStatus(false);
    };
  }, [setFooterStatus]);
  return <div>Are you sure you want to delete?</div>;
};

export default DeleteCard;
