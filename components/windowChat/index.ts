const contacts = [
  {
    name: 'Kim Chi',
    href: '#',
    url: '/images/contact/kimchi.jpg',
    haveStories: true,
    seen: true,
  },
  {
    name: 'Tran Thanh Nha',
    href: '##',
    url: '/images/contact/tranthanhnha.jpg',
    haveStories: true,
    seen: false,
  },
  {
    name: 'Trang Duong',
    href: '##',
    url: '/images/contact/trangduong.jpg',
    haveStories: false,
    seen: false,
  },
  {
    name: 'Duc ri',
    href: '##',
    url: '/images/contact/ducri.jpg',
    haveStories: false,
    seen: false,
  },
  {
    name: 'Diem Quynh',
    href: '##',
    url: '/images/contact/diemquynh.jpg',
    haveStories: true,
    seen: false,
  },
  {
    name: 'Duyen',
    href: '##',
    url: '/images/contact/duyen.jpg',
    haveStories: false,
    seen: false,
  },
  {
    name: 'Trang La',
    href: '##',
    url: '/images/contact/trangla.png',
    haveStories: false,
    seen: false,
  },
  {
    name: 'Duy Hung',
    href: '##',
    url: '/images/contact/duyhuynh.png',
    haveStories: false,
    seen: false,
  },
  {
    name: 'An Khuong',
    href: '##',
    url: '/images/contact/ankhuong.jpg',
    haveStories: false,
    seen: false,
  },
  {
    name: 'Kieu Trinh',
    href: '##',
    url: '/images/contact/kieutrinh.jpg',
    haveStories: false,
    seen: false,
  },
  {
    name: 'Hoai Bao',
    href: '##',
    url: '/images/contact/hoaibao.jpg',
    haveStories: true,
    seen: false,
  },
  {
    name: 'My lan',
    href: '##',
    url: '/images/contact/mylan.jpg',
    haveStories: false,
    seen: false,
  },
  {
    name: 'Hung Duong',
    href: '##',
    url: '/images/contact/hungduong.jpg',
    haveStories: true,
    seen: true,
  },
];
interface Message {
  id: number;
  name: string;
  url: string;
  seen: boolean;
  lastMessage: string;
}

export const messages: Message[] = contacts.map((contact, index) => {
  return {
    id: index + 1,
    name: contact.name,
    url: contact.url,
    seen: contact.seen,
    lastMessage: '',
    createdAt: '2023-09-26 07:03:11',
  };
});
