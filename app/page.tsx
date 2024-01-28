import Image from "next/image";
import { Button } from "@/components/ui/button";
import MoviesCarousel from "@/components/MoviesCarousel";
import { getUpcomingMovies, getTopRatedMovies, getPopularMovies } from "@/lib/getMovies";
import CaroselBannerWrapper from "@/components/CaroselBannerWrapper";

export default async function Home() {
  const upcomingMovies =await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  return (
    <main>
      <CaroselBannerWrapper/>
      <div className='flex flex-col space-y-2 xl:-mt-48'>
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" isVertical={false}/>
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" isVertical={false} />
        <MoviesCarousel movies={popularMovies} title="Popular" isVertical={false} />
      </div>
    </main>
  );
}
