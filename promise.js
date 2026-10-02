//সহজ ভাষায় Promise (প্রমিস) হলো জাভাস্ক্রিপ্টের একটি কনসেপ্ট, যা ভবিষ্যতে কোনো কাজ সফল হবে নাকি ব্যর্থ হবে—তার একটি নিশ্চয়তা বা প্রতিশ্রুতি দেয়।

const getData = new Promise((resolve, rejecttt) => {
    const num = Math.random() * 10;
    console.log('generated num', num)
    if (num > 5) {
        resolve({ num: num })
    }
    else {
        rejecttt({ err: 'Data is not available' })
    }
});
getData
    .then(data => console.log('promise resolved', data))
    .catch(error => console.log(error))