const  Text = () => {
return (<div className="">
    <img className='left-[54vw] top-[247vh] rounded-[50%] h-[13rem] md:block absolute
     md:h-[20rem] md:top-[135vh] md:left-[63vw] rounded-full'
   src="data:image/jpeg;base64,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" 
   ></img>
        <div className='text-white p-10 text-2xl w-11/12 mt-4 font-semibold italic mx-auto 
    md:w-6/12 md:mx-[2rem]'>
      <p>We're passionate about food. From delectable appetizers to mouthwatering mains and heavenly desserts, we serve it all. Order online, and savor the goodness of every bite.
      we believe that great meals create lasting memories. Our mission is to bring the magic of fine dining right to your doorstep. Explore our delectable menu and embark on a culinary adventure like no other."
      </p>
      <button className='bg-yellow-500 mt-5 rounded-md px-4 py-2 text-white'
      >Order Now</button>
    </div>
    <div>
      <img className="hidden md:absolute md:block md:left-[50vw] top-[80rem] md:h-[30rem]"
      src="data:image/jpeg;base64,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"
      >
      </img>
    </div>
</div>)


}
export default Text;