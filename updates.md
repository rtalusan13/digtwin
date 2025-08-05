# Updates & Patches

## Future Notes
- Looking to shift update-log scroll bar from right side to left
- Will make update-log text smaller by 1 pt and reduce the line spacing between each bulletpoint
- Prompt: put the update log scroll bar on the left side of the box, with just a few pixels of padding from the left edge of the box. do not mak it look awkward and make sure the text does not shift positions while there is a scrollbar. make sure all the text is still aligned to the left and reduce the line spacing between each bullet point and make the bulletpoint text smaller by 1 pt

## 8/5/25
- Fixed bug where code prompter would halt peach updates in browser
- Edited reward code panel to be an on-screen pop-up rather than being integrated through the browser
- Updated peach display to be limited to 2 decimal points, and also reformatted quantities (ex. 6700M to 6.7B)
- Separated styling (original file: index.html) into style.css
## 8/4/25
- Updated the update log visuals into a larger pop-up
- Integrated updates.md file into index.html to use as the source of the update log text
- Collapsible empire display for a cleaner look with icons, which loads collapsed when page is opened
## 8/1/25
- Updated code logic (switch case) - **try: bonuspeaches, anothercode** | 
*can also look at script in inspect element*
- Changed display refresh rate from 1000 ms --> 20 ms
- Planning entities scaling update to balance gameplay + plateaus
## 7/30/25
- Miners work offline now  *(Offline rate = 0.01\*Regular Rate)*
- Other QOL changes and edge case prevention
- Added update log (trying to use .txt file) and code buttons (try: peachy2025)
## 7/28/25
- Looking into the button highlighting issue, where the peach emoji can be clicked on and highlighted (possible solution?: png rather than text)
- Will further scale progression, price increase overlaps too early from one entity to the following one
- Also noticed how much empty space there is on desktop, would look to see if there can be any features added to desktop specifically as well as making mobile less compact
## 7/27/25 (Peach Reset)
- Renamed "Upgrades" to "Entities" across all files, to make way for modifiers/upgrades that can be bought separate of entities
- Included new entities, scaled progression to set up for upgrades (more patches will decrease rates)
- **PEACHES RESET #1** ; Across all devices, all data has been reset to 0
## 7/26/25 (Released!)
Built and Launched!
- Incorporated Cookies to save user data on devices for 30 days.
- Updated visuals, graphics, and functionality on mobile devices.
- Fixed footer to bottom of webpage.
