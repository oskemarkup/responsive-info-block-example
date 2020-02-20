const photos = [
    {
        image: 'https://via.placeholder.com/343x260'
    },
    {
        image: 'https://via.placeholder.com/343x260'
    },
    {
        image: 'https://via.placeholder.com/343x260'
    },
    {
        image: 'https://via.placeholder.com/343x260'
    },
    {
        image: 'https://via.placeholder.com/343x260'
    }
];

const items = [
    {
        title: 'Элемент 1',
        image: 'https://via.placeholder.com/85x128'
    },
    {
        title: 'Элемент 2',
        image: 'https://via.placeholder.com/85x128'
    },
    {
        title: 'Элемент 3',
        image: 'https://via.placeholder.com/85x128'
    },
    {
        title: 'Элемент 4',
        image: 'https://via.placeholder.com/85x128'
    },
    {
        title: 'Элемент 5',
        image: 'https://via.placeholder.com/85x128'
    }
];

const data = [
    {
        photos: photos,
        morePhotosCount: 3,
        title: 'Полностью заполненный блок',
        titleIcon: '6',
        special: true,
        afterTitle: ['5', '6'],
        address: 'Адрес или иная информация',
        phone: '+7 (123) 456-78-90',
        social: ['3', '6'],
        items: items,
        moreItemsCount: 5,
        itemsLink: '#',
        shortDescription: 'Краткое описание в одну строку',
        description: 'Длинное описание. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus harum labore quos ut voluptate. Ad aliquam aliquid, animi asperiores assumenda autem commodi consequuntur deserunt dolore dolorum eius esse eum ex excepturi expedita illo ipsum laborum libero magnam nam odio optio, praesentium quo quod recusandae repellat repellendus sapiente sint sunt tempore totam veniam voluptate voluptatibus. Aperiam asperiores id, itaque laboriosam laborum neque perspiciatis quod recusandae rerum? Consectetur, debitis harum id impedit ipsam nihil nulla officia perferendis porro provident quasi quod rerum.',
        features: ['1', '2', '3', '4'],
        moreLink: '#'
    },
    {
        photos: photos,
        morePhotosCount: 3,
        title: 'Без иконок телефона',
        special: true,
        afterTitle: ['5', '6'],
        address: 'Адрес или иная информация',
        phone: '+7 (123) 456-78-90',
        items: items,
        moreItemsCount: 5,
        itemsLink: '#',
        shortDescription: 'Краткое описание в одну строку',
        description: 'Длинное описание. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus harum labore quos ut voluptate. Ad aliquam aliquid, animi asperiores assumenda autem commodi consequuntur deserunt dolore dolorum eius esse eum ex excepturi expedita illo ipsum laborum libero magnam nam odio optio, praesentium quo quod recusandae repellat repellendus sapiente sint sunt tempore totam veniam voluptate voluptatibus. Aperiam asperiores id, itaque laboriosam laborum neque perspiciatis quod recusandae rerum? Consectetur, debitis harum id impedit ipsam nihil nulla officia perferendis porro provident quasi quod rerum.',
        features: ['1', '2', '3', '4'],
        moreLink: '#'
    },
    {
        photos: photos.slice(0, 4),
        title: 'Блок с меньшим кол-вом фото',
        address: 'Адрес или иная информация',
        phone: '+7 (123) 456-78-90',
        social: ['3', '6'],
        items: items,
        moreItemsCount: 5,
        itemsLink: '#',
        shortDescription: 'Краткое описание в одну строку',
        description: 'Длинное описание. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus harum labore quos ut voluptate. Ad aliquam aliquid, animi asperiores assumenda autem commodi consequuntur deserunt dolore dolorum eius esse eum ex excepturi expedita illo ipsum laborum libero magnam nam odio optio, praesentium quo quod recusandae repellat repellendus sapiente sint sunt tempore totam veniam voluptate voluptatibus. Aperiam asperiores id, itaque laboriosam laborum neque perspiciatis quod recusandae rerum? Consectetur, debitis harum id impedit ipsam nihil nulla officia perferendis porro provident quasi quod rerum.',
        features: ['1', '2', '3', '4'],
        moreLink: '#'
    },
    {
        photos: photos,
        morePhotosCount: 3,
        title: 'Блок с меньшим кол-вом элементов',
        address: 'Адрес или иная информация',
        phone: '+7 (123) 456-78-90',
        social: ['3', '6'],
        items: items.slice(0, 3),
        itemsLink: '#',
        shortDescription: 'Краткое описание в одну строку',
        description: 'Длинное описание. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus harum labore quos ut voluptate. Ad aliquam aliquid, animi asperiores assumenda autem commodi consequuntur deserunt dolore dolorum eius esse eum ex excepturi expedita illo ipsum laborum libero magnam nam odio optio, praesentium quo quod recusandae repellat repellendus sapiente sint sunt tempore totam veniam voluptate voluptatibus. Aperiam asperiores id, itaque laboriosam laborum neque perspiciatis quod recusandae rerum? Consectetur, debitis harum id impedit ipsam nihil nulla officia perferendis porro provident quasi quod rerum.',
        features: ['1', '2', '3', '4'],
        moreLink: '#'
    },
    {
        photos: photos,
        morePhotosCount: 3,
        title: 'Блок без описания',
        address: 'Адрес или иная информация',
        phone: '+7 (123) 456-78-90',
        social: ['3', '6'],
        items: items,
        moreItemsCount: 5,
        itemsLink: '#',
        shortDescription: 'Краткое описание в одну строку',
        features: ['1', '2', '3', '4'],
        moreLink: '#'
    },
    {
        photos: photos,
        morePhotosCount: 3,
        title: 'Блок без элементов',
        address: 'Адрес или иная информация',
        phone: '+7 (123) 456-78-90',
        social: ['3', '6'],
        shortDescription: 'Краткое описание в одну строку',
        description: 'Длинное описание. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus harum labore quos ut voluptate. Ad aliquam aliquid, animi asperiores assumenda autem commodi consequuntur deserunt dolore dolorum eius esse eum ex excepturi expedita illo ipsum laborum libero magnam nam odio optio, praesentium quo quod recusandae repellat repellendus sapiente sint sunt tempore totam veniam voluptate voluptatibus. Aperiam asperiores id, itaque laboriosam laborum neque perspiciatis quod recusandae rerum? Consectetur, debitis harum id impedit ipsam nihil nulla officia perferendis porro provident quasi quod rerum.',
        features: ['1', '2', '3', '4'],
        moreLink: '#'
    },
    {
        photos: photos,
        morePhotosCount: 3,
        title: 'Без иконок справа',
        address: 'Адрес или иная информация',
        phone: '+7 (123) 456-78-90',
        social: ['3', '6'],
        items: items,
        moreItemsCount: 5,
        itemsLink: '#',
        shortDescription: 'Краткое описание в одну строку',
        description: 'Длинное описание. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus harum labore quos ut voluptate. Ad aliquam aliquid, animi asperiores assumenda autem commodi consequuntur deserunt dolore dolorum eius esse eum ex excepturi expedita illo ipsum laborum libero magnam nam odio optio, praesentium quo quod recusandae repellat repellendus sapiente sint sunt tempore totam veniam voluptate voluptatibus. Aperiam asperiores id, itaque laboriosam laborum neque perspiciatis quod recusandae rerum? Consectetur, debitis harum id impedit ipsam nihil nulla officia perferendis porro provident quasi quod rerum.',
        moreLink: '#'
    },
    {
        photos: photos,
        morePhotosCount: 3,
        title: 'Без иконок справа от заголовка',
        address: 'Адрес или иная информация',
        phone: '+7 (123) 456-78-90',
        social: ['3', '6'],
        items: items,
        moreItemsCount: 5,
        itemsLink: '#',
        shortDescription: 'Краткое описание в одну строку',
        description: 'Длинное описание. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus harum labore quos ut voluptate. Ad aliquam aliquid, animi asperiores assumenda autem commodi consequuntur deserunt dolore dolorum eius esse eum ex excepturi expedita illo ipsum laborum libero magnam nam odio optio, praesentium quo quod recusandae repellat repellendus sapiente sint sunt tempore totam veniam voluptate voluptatibus. Aperiam asperiores id, itaque laboriosam laborum neque perspiciatis quod recusandae rerum? Consectetur, debitis harum id impedit ipsam nihil nulla officia perferendis porro provident quasi quod rerum.',
        features: ['1', '2', '3', '4'],
        moreLink: '#'
    },
    {
        singlePhoto: 'https://via.placeholder.com/343x260',
        title: 'Минимально заполненный блок',
        address: 'Адрес или иная информация',
        phone: '+7 (123) 456-78-90',
        shortDescription: 'Краткое описание в одну строку',
        moreLink: '#'
    },
];

function renderHello() {
    const template = document.getElementById('template').innerHTML;

    data.forEach(function(item) {
        if (item.morePhotosCount) {
            item.photos[item.photos.length - 1].last = true;
        }

        if (item.moreItemsCount) {
            item.items[item.items.length - 1].last = true;
        }

        document.getElementById('target').insertAdjacentHTML('beforeend', Mustache.render(template, item));
    });
}