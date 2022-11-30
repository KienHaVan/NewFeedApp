import AxiosClientSubject from './AxiosClient';

const feedApi = {
  getFeedList() {
    return AxiosClientSubject.get('posts');
  },
  getExploreList() {
    return AxiosClientSubject.get('saved');
  },
  postListProfile(res) {
    return AxiosClientSubject.post('profile', res);
  },
  // updateListStudent(id, newData) {
  //   return AxiosClientSubject.patch(`student/${id}`, newData);
  // },
};
export default feedApi;
