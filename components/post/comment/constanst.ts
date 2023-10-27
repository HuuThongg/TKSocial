export const commentsData: SchemaComment[] = [
  {
    id: 'post1',
    postId: 'post1',
    comments: [
      {
        id: 'comment1',
        content: 'Great post!',
        image: '/images/comment1.jpg',
        video: '',
        createdAt: '2023-05-01T12:00:00',
        updatedAt: '2023-05-01T12:30:00',
        user: {
          id: 'user1',
          name: 'Kim Chi',
          avatar: 'kimchi.jpg',
          avatarUrl: '/images/contact/kimchi.jpg',
        },
        interactions: {
          likes: [
            {
              id: 'like1',
              user: {
                id: 'user2',
                name: 'Tran Thanh Nha',
                avatar: 'tranthanhnha.jpg',
                avatarUrl: '/images/contact/tranthanhnha.jpg',
              },
            },
            {
              id: 'like2',
              user: {
                id: 'user3',
                name: 'Trang Duong',
                avatar: 'trangduong.jpg',
                avatarUrl: '/images/contact/trangduong.jpg',
              },
            },
          ],
          tym: [],
          haha: [],
        },
        replies: [
          {
            id: 'reply1',
            content: 'Thanks!',
            image: '',
            video: '',
            createdAt: '2023-05-01T12:35:00',
            updatedAt: '2023-05-01T12:35:00',
            user: {
              id: 'user4',
              name: 'Duc ri',
              avatar: 'ducri.jpg',
              avatarUrl: '/images/contact/ducri.jpg',
            },
            interactions: {
              likes: [],
              tym: [],
              haha: [],
            },
            replies: [
              {
                id: 'reply4',
                content: "You're welcome!",
                image: '',
                video: '',
                createdAt: '2023-05-01T13:00:00',
                updatedAt: '2023-05-01T13:00:00',
                user: {
                  id: 'user5',
                  name: 'Diem Quynh',
                  avatar: 'diemquynh.jpg',
                  avatarUrl: '/images/contact/diemquynh.jpg',
                },
                interactions: {
                  likes: [],
                  tym: [],
                  haha: [],
                },
                replies: [
                  {
                    id: 'reply7',
                    content: 'Glad you liked it!',
                    image: '',
                    video: '',
                    createdAt: '2023-05-01T13:05:00',
                    updatedAt: '2023-05-01T13:05:00',
                    user: {
                      id: 'user6',
                      name: 'Duyen',
                      avatar: 'duyen.jpg',
                      avatarUrl: '/images/contact/duyen.jpg',
                    },
                    interactions: {
                      likes: [],
                      tym: [],
                      haha: [],
                    },
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'comment1',
        content: 'Great post!',
        image: '/images/comment1.jpg',
        video: '',
        createdAt: '2023-05-01T12:00:00',
        updatedAt: '2023-05-01T12:30:00',
        user: {
          id: 'user1',
          name: 'Kim Chi',
          avatar: 'kimchi.jpg',
          avatarUrl: '/images/contact/kimchi.jpg',
        },
        interactions: {
          likes: [
            {
              id: 'like1',
              user: {
                id: 'user2',
                name: 'Tran Thanh Nha',
                avatar: 'tranthanhnha.jpg',
                avatarUrl: '/images/contact/tranthanhnha.jpg',
              },
            },
            {
              id: 'like2',
              user: {
                id: 'user3',
                name: 'Trang Duong',
                avatar: 'trangduong.jpg',
                avatarUrl: '/images/contact/trangduong.jpg',
              },
            },
          ],
          tym: [],
          haha: [],
        },
        replies: [
          {
            id: 'reply1',
            content: 'Thanks!',
            image: '',
            video: '',
            createdAt: '2023-05-01T12:35:00',
            updatedAt: '2023-05-01T12:35:00',
            user: {
              id: 'user4',
              name: 'Duc ri',
              avatar: 'ducri.jpg',
              avatarUrl: '/images/contact/ducri.jpg',
            },
            interactions: {
              likes: [],
              tym: [],
              haha: [],
            },
            replies: [
              {
                id: 'reply4',
                content: "You're welcome!",
                image: '',
                video: '',
                createdAt: '2023-05-01T13:00:00',
                updatedAt: '2023-05-01T13:00:00',
                user: {
                  id: 'user5',
                  name: 'Diem Quynh',
                  avatar: 'diemquynh.jpg',
                  avatarUrl: '/images/contact/diemquynh.jpg',
                },
                interactions: {
                  likes: [],
                  tym: [],
                  haha: [],
                },
                replies: [
                  {
                    id: 'reply7',
                    content: 'Glad you liked it!',
                    image: '',
                    video: '',
                    createdAt: '2023-05-01T13:05:00',
                    updatedAt: '2023-05-01T13:05:00',
                    user: {
                      id: 'user6',
                      name: 'Duyen',
                      avatar: 'duyen.jpg',
                      avatarUrl: '/images/contact/duyen.jpg',
                    },
                    interactions: {
                      likes: [],
                      tym: [],
                      haha: [],
                    },
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // Add more comments here following the same structure
];

type User = {
  id: string;
  name: string;
  avatar: string;
  avatarUrl: string;
};

type Comments = {
  id: string;
  content: string;
  image: string;
  video: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  interactions: {
    likes: {
      id: string;
      user: User;
    }[];
    tym: {
      id: string;
      user: User;
    }[];
    haha: {
      id: string;
      user: User;
    }[];
  };
  replies?: Comments[];
};

export type SchemaComment = {
  id: string;
  postId: string;
  comments: Comments[];
};
