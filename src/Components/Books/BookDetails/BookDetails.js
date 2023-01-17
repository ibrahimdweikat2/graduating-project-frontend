import React from 'react';
import StarRatings from 'react-star-ratings';
const LazyTableDetails = React.lazy(() => import('./TableDetails'));
const LazyRelatedBook = React.lazy(() => import('./RelatedBook'));
const LazyAddToCart = React.lazy(() => import('./AddToCart'));
const book={
    id:"639774c4badfb8b3aa286b6e",
    title:"The Hitchhiker's Guide to the Galaxy",
    authors:"Douglas Adams",
    rating:4.21,
    num_pages:193,
    image_url:"https://images.gr-assets.com/books/1388282444l/386162.jpg",
    description:"Seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker's Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor.Together this dynamic pair begin a journey through space aided by quotes from The Hitchhiker's Guide (\"A towel is about the most massively useful thing an interstellar hitchhiker can have\") and a galaxy-full of fellow travelers: Zaphod Beeblebrox—the two-headed, three-armed ex-hippie and totally out-to-lunch president of the galaxy; Trillian, Zaphod's girlfriend (formally Tricia McMillan), whom Arthur tried to pick up at a cocktail party once upon a time zone; Marvin, a paranoid, brilliant, and chronically depressed robot; Veet Voojagig, a former graduate student who is obsessed with the disappearance of all the ballpoint pens he bought over the years.",
    format:"Paperback",
}
const books=[
    {
        id:"639774c4badfb8b3aa286b6e",
        title:"The Hitchhiker's Guide to the Galaxy",
        authors:"Douglas Adams",
        rating:4.21,
        num_pages:193,
        image_url:"https://images.gr-assets.com/books/1388282444l/386162.jpg",
        description:"Seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker's Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor.Together this dynamic pair begin a journey through space aided by quotes from The Hitchhiker's Guide (\"A towel is about the most massively useful thing an interstellar hitchhiker can have\") and a galaxy-full of fellow travelers: Zaphod Beeblebrox—the two-headed, three-armed ex-hippie and totally out-to-lunch president of the galaxy; Trillian, Zaphod's girlfriend (formally Tricia McMillan), whom Arthur tried to pick up at a cocktail party once upon a time zone; Marvin, a paranoid, brilliant, and chronically depressed robot; Veet Voojagig, a former graduate student who is obsessed with the disappearance of all the ballpoint pens he bought over the years.",
        format:"Paperback",
    },
    {
        id:"639774c4badfb8b3aa286b6e",
        title:"The Hitchhiker's Guide to the Galaxy",
        authors:"Douglas Adams",
        rating:4.21,
        num_pages:193,
        image_url:"https://images.gr-assets.com/books/1388282444l/386162.jpg",
        description:"Seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker's Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor.Together this dynamic pair begin a journey through space aided by quotes from The Hitchhiker's Guide (\"A towel is about the most massively useful thing an interstellar hitchhiker can have\") and a galaxy-full of fellow travelers: Zaphod Beeblebrox—the two-headed, three-armed ex-hippie and totally out-to-lunch president of the galaxy; Trillian, Zaphod's girlfriend (formally Tricia McMillan), whom Arthur tried to pick up at a cocktail party once upon a time zone; Marvin, a paranoid, brilliant, and chronically depressed robot; Veet Voojagig, a former graduate student who is obsessed with the disappearance of all the ballpoint pens he bought over the years.",
        format:"Paperback",
    },
    {
        id:"639774c4badfb8b3aa286b6e",
        title:"The Hitchhiker's Guide to the Galaxy",
        authors:"Douglas Adams",
        rating:4.21,
        num_pages:193,
        image_url:"https://images.gr-assets.com/books/1388282444l/386162.jpg",
        description:"Seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker's Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor.Together this dynamic pair begin a journey through space aided by quotes from The Hitchhiker's Guide (\"A towel is about the most massively useful thing an interstellar hitchhiker can have\") and a galaxy-full of fellow travelers: Zaphod Beeblebrox—the two-headed, three-armed ex-hippie and totally out-to-lunch president of the galaxy; Trillian, Zaphod's girlfriend (formally Tricia McMillan), whom Arthur tried to pick up at a cocktail party once upon a time zone; Marvin, a paranoid, brilliant, and chronically depressed robot; Veet Voojagig, a former graduate student who is obsessed with the disappearance of all the ballpoint pens he bought over the years.",
        format:"Paperback",
    },
    {
        id:"639774c4badfb8b3aa286b6e",
        title:"The Hitchhiker's Guide to the Galaxy",
        authors:"Douglas Adams",
        rating:4.21,
        num_pages:193,
        image_url:"https://images.gr-assets.com/books/1388282444l/386162.jpg",
        description:"Seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker's Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor.Together this dynamic pair begin a journey through space aided by quotes from The Hitchhiker's Guide (\"A towel is about the most massively useful thing an interstellar hitchhiker can have\") and a galaxy-full of fellow travelers: Zaphod Beeblebrox—the two-headed, three-armed ex-hippie and totally out-to-lunch president of the galaxy; Trillian, Zaphod's girlfriend (formally Tricia McMillan), whom Arthur tried to pick up at a cocktail party once upon a time zone; Marvin, a paranoid, brilliant, and chronically depressed robot; Veet Voojagig, a former graduate student who is obsessed with the disappearance of all the ballpoint pens he bought over the years.",
        format:"Paperback",
    },
    {
        id:"639774c4badfb8b3aa286b6e",
        title:"The Hitchhiker's Guide to the Galaxy",
        authors:"Douglas Adams",
        rating:4.21,
        num_pages:193,
        image_url:"https://images.gr-assets.com/books/1388282444l/386162.jpg",
        description:"Seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker's Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor.Together this dynamic pair begin a journey through space aided by quotes from The Hitchhiker's Guide (\"A towel is about the most massively useful thing an interstellar hitchhiker can have\") and a galaxy-full of fellow travelers: Zaphod Beeblebrox—the two-headed, three-armed ex-hippie and totally out-to-lunch president of the galaxy; Trillian, Zaphod's girlfriend (formally Tricia McMillan), whom Arthur tried to pick up at a cocktail party once upon a time zone; Marvin, a paranoid, brilliant, and chronically depressed robot; Veet Voojagig, a former graduate student who is obsessed with the disappearance of all the ballpoint pens he bought over the years.",
        format:"Paperback",
    },
];
const BookDetails = () => {
    // const location =useLocation();
    
  return (
    <div className='container'>
        <div>
            <p className='text-muted fs-6'>{`Home/Books/`}<span className='text-blue'>{book.title}</span></p>
        </div>
        <div className='row algin-items-center mt-5'>
            <div className='col-lg-9 col-md-10 col-sm-12'>
                <div className='row'>
                    <div className='col-12 d-flex algin-items-center'>
                        <div className='row'>
                            <div className='col-6 col-sm-6 col-md-5'>
                                <img src={book.image_url} alt={book.title}/>
                            </div>
                            <div className='ms-5 ms-lg-5 col-6 col-sm-6'>
                                <h1 className='text-dark fs-5 fw-1'>{book.title}</h1>
                                <p className='text-muted'>{`Author:${book.authors}`}</p>
                                <div className='d-flex algin-items-center'>
                                    <StarRatings rating={book.rating} name='rating' numberOfStars={5} starRatedColor='orange' starDimension='20' starSpacing='3'/>
                                    <div className='mt-1 ms-3'>{`${book.rating} Rating`}</div>
                                </div>
                                <div className='w-25 my-3 text-blue position-relative p-3 rounded-2' style={{border:'2px solid #1C8CCE'}}>
                                    <p className='position-absolute start-50 top-50 translate-middle'>$14.99</p>
                                </div>
                                <p className='text-muted'>{book.description}</p>
                                <React.Suspense>
                                    <LazyAddToCart />
                                </React.Suspense>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-12'>
                        <React.Suspense>
                            <LazyTableDetails book={book}/>
                        </React.Suspense>
                    </div>
                </div>
            </div>
            <React.Suspense>
                <LazyRelatedBook books={books}/>
            </React.Suspense>
        </div>
    </div>
  )
}

export default BookDetails