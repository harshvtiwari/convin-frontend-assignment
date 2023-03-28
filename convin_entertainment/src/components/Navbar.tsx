import { MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // History data to be updated from redux store
  // bucket, card will be stored as stack DS
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className='navbar'>
      <div className='brand'>CONVIN</div>
      <div className='options'>
        <MenuOutlined onClick={showDrawer} />
      </div>
      <Drawer
        title='History'
        placement={'right'}
        closable={false}
        onClose={onClose}
        width={'250px'}
        open={open}
        key={'right'}
        closeIcon>
        <p>Bucket-Card</p>
        <p>Bucket-Card</p>
        <p>Bucket-Card</p>
      </Drawer>
    </div>
  );
};

export default Navbar;
