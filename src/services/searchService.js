import httpRequest from '~/utils/httpRequest';

const search = async (q, type = 'less') => {
  const res = await httpRequest.get('users/search', {
    params: {
      q,
      type,
    },
  });
  return res.data;
};

const searchService = {
  search,
};

export default searchService;
