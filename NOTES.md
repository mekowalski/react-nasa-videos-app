# App Overview
- Using NASA API again but this time for videos
- Similar to the NASA Images app, code-wise, but design and layout will be different
  - Top searchbar, make request to external API, render list of items
- Similar layout to Youtube site
  - searchbar, main video, side column with other videos related to search term, click on an item and show video on the screen(main video) AND get the video to actually play

## Design Approach - Component Structure
- SearchBar: functions as input, update states and triggers form submit
- VideoList: render entire list of videos
- VideoItem: renders a single video that resulted from the search
- VideoDetail: will actually show video player and play video with tile and description
