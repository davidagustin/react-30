export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  folder: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "drum-kit",
    title: "JavaScript Drum Kit",
    description: "Play drums with your keyboard",
    folder: "01 - JavaScript Drum Kit",
  },
  {
    id: 2,
    slug: "clock",
    title: "JS and CSS Clock",
    description: "An analog clock with CSS and JavaScript",
    folder: "02 - JS and CSS Clock",
  },
  {
    id: 3,
    slug: "css-variables",
    title: "CSS Variables",
    description: "Update CSS variables with JavaScript",
    folder: "03 - CSS Variables",
  },
  {
    id: 4,
    slug: "array-cardio-1",
    title: "Array Cardio Day 1",
    description: "Array methods: filter, map, sort, reduce",
    folder: "04 - Array Cardio Day 1",
  },
  {
    id: 5,
    slug: "flex-panel",
    title: "Flex Panel Gallery",
    description: "Animated image gallery with flexbox",
    folder: "05 - Flex Panel Gallery",
  },
  {
    id: 6,
    slug: "type-ahead",
    title: "Type Ahead",
    description: "Search cities with autocomplete",
    folder: "06 - Type Ahead",
  },
  {
    id: 7,
    slug: "array-cardio-2",
    title: "Array Cardio Day 2",
    description: "More array methods: some, every, find, findIndex",
    folder: "07 - Array Cardio Day 2",
  },
  {
    id: 8,
    slug: "canvas",
    title: "Fun with HTML5 Canvas",
    description: "Draw on canvas with your mouse",
    folder: "08 - Fun with HTML5 Canvas",
  },
  {
    id: 9,
    slug: "dev-tools",
    title: "Dev Tools Domination",
    description: "Master the console and debugging tools",
    folder: "09 - Dev Tools Domination",
  },
  {
    id: 10,
    slug: "checkboxes",
    title: "Hold Shift and Check Checkboxes",
    description: "Select multiple checkboxes with shift key",
    folder: "10 - Hold Shift and Check Checkboxes",
  },
  {
    id: 11,
    slug: "video-player",
    title: "Custom Video Player",
    description: "Build a custom HTML5 video player",
    folder: "11 - Custom Video Player",
  },
  {
    id: 12,
    slug: "key-sequence",
    title: "Key Sequence Detection",
    description: "Konami code style key sequence detection",
    folder: "12 - Key Sequence Detection",
  },
  {
    id: 13,
    slug: "slide-in",
    title: "Slide in on Scroll",
    description: "Animate elements as they scroll into view",
    folder: "13 - Slide in on Scroll",
  },
  {
    id: 14,
    slug: "references",
    title: "JavaScript References VS Copying",
    description: "Understand references vs copying in JavaScript",
    folder: "14 - JavaScript References VS Copying",
  },
  {
    id: 15,
    slug: "localstorage",
    title: "LocalStorage",
    description: "Store and retrieve data from localStorage",
    folder: "15 - LocalStorage",
  },
  {
    id: 16,
    slug: "mouse-shadow",
    title: "Mouse Move Shadow",
    description: "Text shadow follows mouse movement",
    folder: "16 - Mouse Move Shadow",
  },
  {
    id: 17,
    slug: "sort-articles",
    title: "Sort Without Articles",
    description: "Sort band names ignoring articles (a, an, the)",
    folder: "17 - Sort Without Articles",
  },
  {
    id: 18,
    slug: "reduce-times",
    title: "Adding Up Times with Reduce",
    description: "Calculate total time from video durations",
    folder: "18 - Adding Up Times with Reduce",
  },
  {
    id: 19,
    slug: "webcam",
    title: "Webcam Fun",
    description: "Capture and manipulate webcam feed",
    folder: "19 - Webcam Fun",
  },
  {
    id: 20,
    slug: "speech-detection",
    title: "Speech Detection",
    description: "Convert speech to text",
    folder: "20 - Speech Detection",
  },
  {
    id: 21,
    slug: "geolocation",
    title: "Geolocation",
    description: "Get user's location and display on map",
    folder: "21 - Geolocation",
  },
  {
    id: 22,
    slug: "follow-along",
    title: "Follow Along Link Highlighter",
    description: "Highlight links with animated background",
    folder: "22 - Follow Along Link Highlighter",
  },
  {
    id: 23,
    slug: "speech-synthesis",
    title: "Speech Synthesis",
    description: "Convert text to speech",
    folder: "23 - Speech Synthesis",
  },
  {
    id: 24,
    slug: "sticky-nav",
    title: "Sticky Nav",
    description: "Navigation bar that sticks on scroll",
    folder: "24 - Sticky Nav",
  },
  {
    id: 25,
    slug: "event-capture",
    title: "Event Capture, Propagation, Bubbling and Once",
    description: "Understand event propagation",
    folder: "25 - Event Capture, Propagation, Bubbling and Once",
  },
  {
    id: 26,
    slug: "stripe-nav",
    title: "Stripe Follow Along Nav",
    description: "Dropdown navigation with animated background",
    folder: "26 - Stripe Follow Along Nav",
  },
  {
    id: 27,
    slug: "click-drag",
    title: "Click and Drag",
    description: "Horizontal scrolling with click and drag",
    folder: "27 - Click and Drag",
  },
  {
    id: 28,
    slug: "video-speed",
    title: "Video Speed Controller",
    description: "Control video playback speed",
    folder: "28 - Video Speed Controller",
  },
  {
    id: 29,
    slug: "countdown",
    title: "Countdown Timer",
    description: "Build a countdown timer",
    folder: "29 - Countdown Timer",
  },
  {
    id: 30,
    slug: "whack-a-mole",
    title: "Whack A Mole",
    description: "Classic whack-a-mole game",
    folder: "30 - Whack A Mole",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectById(id: number): Project | undefined {
  return projects.find((p) => p.id === id);
}
