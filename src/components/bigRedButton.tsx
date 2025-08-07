export default function CodeButton() {
  return (
    <button
  className="
    rounded-full        /* border-radius: 10px */
    w-[400px]              /* width: 60px */
    h-[400px]                 /* height: 40px (2.5rem) */
    bg-[#fe5864]          /* background: #fe5864 */
    border-none           /* border: none */
    text-white            /* color: white */
    shadow-[0_18px_0_#b8181d]  /* box-shadow: 0px 6px 0px #b8181d */
    mb-[5px]              /* margin-bottom: 5px */
    transition-[box-shadow,transform] /* only animate box-shadow & transform */
    duration-100          /* 0.1s */
    cursor-pointer        /* cursor: pointer */
  "
>
  Click me
</button>
  )
}