import catchErrors from '~/core/catchErrors';

export const checkStatus = catchErrors((_req, res) => {
  res.status(200).send('Alive and kicking');
});

export default checkStatus;
