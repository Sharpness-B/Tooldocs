# Welcome to *Tooldocs*!
An interface for the docs for Cegal SYSCO Toolbox. Say goodbye to `ctrl+f` in the docs pdf!

## Add pages to *Tooldocs*
It's easy to add new pages; just add a new object to the array in `src/Data/quiz.js` and pictures in `public/assets/img/`

```javascript
export default [
    {
        id: 0,
        tool_name: 'example name',
        icon: 'icon.png',
        images: ['demo_image.png'],
        text: 'This text explains how the tool works!',
        video_link: 'https://www.youtube.com/embed/a9PadVgYzvE'
    },
    ...
]
```

## How to run locally
Run `git clone https://github.com/Sharpness-b/Tooldocs.git` to get a copy of this repo.

Then `cd Tooldocs`

Use `npm run quick-start` to install dependencies, create a build and then start it! 🚀

After that, visit http://localhost:3000/ and start practising!

## Demo
![homepage](readme_images/home.PNG?raw=true)
![filter quizzes](readme_images/filter.PNG?raw=true)
![quiz](readme_images/quiz.PNG?raw=true)
