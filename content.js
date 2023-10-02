// (() => {
//   const injectNav = () => {
//     const style = `
//    <link rel="preconnect" href="https://fonts.googleapis.com" />
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
//     <link
//       href="https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Work+Sans:wght@400;500;600;700&display=swap"
//       rel="stylesheet"
//     />
//   <style>
//       body {
//         font-family: "Work Sans", sans-serif;
//       }
//       .container {
//         box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
//       }
//       .nav {
//         position: fixed;
//         padding: 20px 40px;
//         bottom: 0;
//         left: 0;
//       }
//       .nav_wrapper {
//         border-radius: 999px;
//         padding: 8px;
//         background-color: rgba(98, 98, 98, 0.17);
//       }
//       .nav_main {
//         background-color: #141414;
//         padding: 12px 16px;
//         padding-right: 20px;
//         border-radius: 999px;
//         display: flex;
//         align-items: center;
//         gap: 24px;
//       }
//       .nav_timer {
//         font-family: "Inter" sans-serif;
//         font-weight: 500;
//         font-size: 20px;
//         color: #fff;
//         display: flex;
//         align-items: center;
//         gap: 8px;
//         padding: 16px;
//         border-right: 1px solid #e8e8e8;
//       }
//       .nav_red-dot {
//         background-color: rgba(192, 4, 4, 19%);
//         border-radius: 999px;
//         padding: 6px;
//       }
//       .nav_red-dot > span {
//         background-color: rgb(192, 4, 4);
//         width: 10px;
//         height: 10px;
//         display: block;
//         border-radius: 999px;
//       }
//       .nav_actions_wrapper {
//         display: flex;
//         align-items: center;
//         gap: 24px;
//       }
//       .nav_actions {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         gap: 4px;
//         cursor: pointer;
//         font-weight: 500;
//         color: #fff;
//         font-size: 12px;
//       }
//       .nav_actions-img {
//         padding: 10px;
//         border-radius: 999px;
//         background-color: #fff;
//         display: flex;
//         border: black solid 1px;
//         place-content: center;
//         place-items: center;
//         width: 36px;
//         height: 36px;
//         position: relative;
//       }
//       .nav_arrow-up {
//         position: absolute;
//         padding: 2px;
//         background-color: #fff;
//         bottom: -2px;
//         right: -2px;
//         border-radius: 2px;
//         box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
//       }
//       .nav_delete {
//         background-color: #4b4b4b;
//         align-self: flex-start;
//         gap: 0;
//         flex-direction: row;
//       }
//     </style>`;
//     const html = ` <section class="nav">
//       <div class="nav_wrapper">
//         <div class="nav_main">
//           <div class="nav_timer">
//             <span>00:03:45</span>
//             <div class="nav_red-dot">
//               <span></span>
//             </div>
//           </div>
//           <div class="nav_actions_wrapper">
//             <div class="nav_actions">
//               <div class="nav_actions-img">
//                 <svg
//                   width="10"
//                   height="14"
//                   viewBox="0 0 10 14"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M1 1.5L1 12.5"
//                     stroke="black"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                   />
//                   <path
//                     d="M9 1.5L9 12.5"
//                     stroke="black"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                   />
//                 </svg>
//               </div>
//               <span>Pause</span>
//             </div>
//             <div class="nav_actions">
//               <div class="nav_actions-img">
//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <g id="heroicons-outline/stop">
//                     <path
//                       id="Rectangle 437"
//                       d="M5.25 7.5C5.25 6.25736 6.25736 5.25 7.5 5.25H16.5C17.7426 5.25 18.75 6.25736 18.75 7.5V16.5C18.75 17.7426 17.7426 18.75 16.5 18.75H7.5C6.25736 18.75 5.25 17.7426 5.25 16.5V7.5Z"
//                       stroke="#0F172A"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </g>
//                 </svg>
//               </div>
//               <span>Stop</span>
//             </div>
//             <div class="nav_actions">
//               <div class="nav_actions-img">
//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <g id="vuesax/linear/video-slash">
//                     <g id="video-slash">
//                       <path
//                         id="Vector"
//                         d="M16.63 7.58008C16.63 7.58008 16.66 6.63008 16.63 6.32008C16.46 4.28008 15.13 3.58008 12.52 3.58008H6.21C3.05 3.58008 2 4.63008 2 7.79008V16.2101C2 17.4701 2.38 18.7401 3.37 19.5501L4 20.0001"
//                         stroke="#292D32"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                       <path
//                         id="Vector_2"
//                         d="M16.7398 10.95V16.21C16.7398 19.37 15.6898 20.42 12.5298 20.42H7.25977"
//                         stroke="#292D32"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                       <path
//                         id="Vector_3"
//                         d="M22.0002 6.73999V15.81C22.0002 17.48 20.8802 18.06 19.5202 17.1L16.7402 15.15"
//                         stroke="#292D32"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                       <path
//                         id="Vector_4"
//                         d="M22.02 2.18994L2.02002 22.1899"
//                         stroke="#292D32"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                     </g>
//                   </g>
//                 </svg>

//                 <div class="nav_arrow-up">
//                   <svg
//                     width="8"
//                     height="8"
//                     viewBox="0 0 8 8"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g id="vuesax/linear/arrow-up">
//                       <g id="arrow-up">
//                         <path
//                           id="Vector"
//                           d="M6.63986 5.01671L4.46653 2.84338C4.20986 2.58671 3.78986 2.58671 3.5332 2.84338L1.35986 5.01671"
//                           stroke="black"
//                           stroke-miterlimit="10"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                         />
//                       </g>
//                     </g>
//                   </svg>
//                 </div>
//               </div>
//               <span>Camera</span>
//             </div>
//             <div class="nav_actions">
//               <div class="nav_actions-img">
//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <g id="heroicons-outline/microphone">
//                     <path
//                       id="Vector"
//                       d="M12 18.75C15.3137 18.75 18 16.0637 18 12.75V11.25M12 18.75C8.68629 18.75 6 16.0637 6 12.75V11.25M12 18.75V22.5M8.25 22.5H15.75M12 15.75C10.3431 15.75 9 14.4069 9 12.75V4.5C9 2.84315 10.3431 1.5 12 1.5C13.6569 1.5 15 2.84315 15 4.5V12.75C15 14.4069 13.6569 15.75 12 15.75Z"
//                       stroke="#0F172A"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </g>
//                 </svg>

//                 <div class="nav_arrow-up">
//                   <svg
//                     width="8"
//                     height="8"
//                     viewBox="0 0 8 8"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g id="vuesax/linear/arrow-up">
//                       <g id="arrow-up">
//                         <path
//                           id="Vector"
//                           d="M6.63986 5.01671L4.46653 2.84338C4.20986 2.58671 3.78986 2.58671 3.5332 2.84338L1.35986 5.01671"
//                           stroke="black"
//                           stroke-miterlimit="10"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                         />
//                       </g>
//                     </g>
//                   </svg>
//                 </div>
//               </div>
//               <span>Mic</span>
//             </div>
//             <div class="nav_actions-img nav_delete">
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <g id="heroicons-outline/trash">
//                   <path
//                     id="Vector"
//                     d="M14.7404 9L14.3942 18M9.60577 18L9.25962 9M19.2276 5.79057C19.5696 5.84221 19.9104 5.89747 20.25 5.95629M19.2276 5.79057L18.1598 19.6726C18.0696 20.8448 17.0921 21.75 15.9164 21.75H8.08357C6.90786 21.75 5.93037 20.8448 5.8402 19.6726L4.77235 5.79057M19.2276 5.79057C18.0812 5.61744 16.9215 5.48485 15.75 5.39432M3.75 5.95629C4.08957 5.89747 4.43037 5.84221 4.77235 5.79057M4.77235 5.79057C5.91878 5.61744 7.07849 5.48485 8.25 5.39432M15.75 5.39432V4.47819C15.75 3.29882 14.8393 2.31423 13.6606 2.27652C13.1092 2.25889 12.5556 2.25 12 2.25C11.4444 2.25 10.8908 2.25889 10.3394 2.27652C9.16065 2.31423 8.25 3.29882 8.25 4.47819V5.39432M15.75 5.39432C14.5126 5.2987 13.262 5.25 12 5.25C10.738 5.25 9.48744 5.2987 8.25 5.39432"
//                     stroke="#BEBEBE"
//                     stroke-width="1.5"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   />
//                 </g>
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>`;
//     document.head.insertAdjacentHTML("beforeend", style);
//     document.body.insertAdjacentHTML("beforeend", html);
//   };
//   chrome.runtime.onMessage.addListener(function (mesaage, sender, sendRespons) {
//     console.log("response");
//   });
// })();
chrome.runtime.onMessage.addListener(async (streamId) => {
  console.log("stream id", streamId);
});
