# Interactive Rating Component

Live link: [https://interactive-rating-component-nine-tau.vercel.app/](https://interactive-rating-component-nine-tau.vercel.app/)

![](./Screenshot%202024-02-16%20at%2021-57-33%20Vite%20TS.png)

This is a simple rating component challenge from @FrontendMentor. I have used: 

- HTML 
- CSS and 
- JavaScript with Typescript 

I am currently learning TS so using it is important, it was a massive challenge, I encountered a lot of errors but pushed through and its worked // save one error.

## Issue to-do 

Currently after you select a rating and then return to the cleared card the hover to purple on clicked ratings doesn't work. 

```js
        // Set styles for newly selected label
        if (labelElement) {
            labelElement.style.backgroundColor = "hsl(216, 12%, 54%)";
            labelElement.style.color = "hsl(0, 0%, 100%)";
        }
```

I suspect an interaction with CSS + JS resetting it all. Will look into it. 

## Continued Development

- I currently have an error in the console.log related to an invalid DOM selection in regards to changing the colour of the label with the nested radio button, I will continue research and fix this error!

- Tailwind was something I wanted to use for this challenge, but its been a minute and I Was having an issue setting it up, so, I went with vanilla CSS and I will return to refactor this code. 

- Improve/refactor usage of TS. I did not utilize TS to its full capacity, I was learning with this project alongside the official docs, so, errors and very little optimization, so, optimization and cleaner TS code! Follow best practice, etc. 

- Better invalid submission que -- currently it just logs to the console if someone clicks on the submit button without a rating present, I would like to add a small message "You need to pick a rating before submission"!

