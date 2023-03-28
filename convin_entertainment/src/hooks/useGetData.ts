import axios from 'axios';
import React, { useEffect, useState } from 'react';
import type { BucketCardsPropsInterface } from 'utils/_interface';

/**
 *
 * @params none
 * @return [data, [boolean, string]]
 * data is from [GET] of api
 * boolean informs if there is ny error to be shown
 * string contains the error description
 */

type BucketsObjectType = Record<string, BucketCardsPropsInterface[]>;
const useGetData = (): [BucketsObjectType, [boolean, string]] => {
  const [bucket, setBucket] = useState<BucketsObjectType>({});
  const [showError, setShowError] = useState<[boolean, string]>([false, '']);
  useEffect(() => {
    axios
      .get('http://demo3847180.mockable.io/bucket')
      .then(res => {
        setBucket(res.data);
      })
      .catch(err => {
        setShowError([true, err]);
      });
  }, []);
  return [bucket, showError];
};

export default useGetData;
