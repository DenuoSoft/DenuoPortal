import { useMemo } from 'react';
import css from './news.module.scss';
import { useGetNewsQuery, useGetEventQuery } from '../../../api/apiSlice';
import CutDescription from '../../cutDescription/cutDescription';
import Loader from '../../loader/loader';
import { parseDate } from '../../../utils/parseDate';

const News = () => {
  const {
    data: news = [],
    isLoading: isNewsLoading,
    isError: isNewsError,
  } = useGetNewsQuery();
  const {
    data: event = [],
    isLoading: isEventsLoading,
    isError: isEventsError,
  } = useGetEventQuery();

  const isLoading = isNewsLoading || isEventsLoading;
  const isError = isNewsError || isEventsError;

  const sortedNews = useMemo(() => {
    return [...news].sort((a, b) => parseDate(b.publishDate) - parseDate(a.publishDate));
  }, [news]);

  return (
    <Loader isLoading={isLoading} isError={isError}>
      <div className={css.layout}>
        <div className={css.newsbox}>
          {sortedNews.length === 0 ? (
            <div className={css.items}>No any news</div>
          ) : (
            sortedNews.map(item => (
              <div className={css.items} key={item.id}>
                <div className={css.imageBox}>
                  <img className={css.image} src={item.image} alt="news" />
                </div>
                <div className={css.infobox}>
                  <div className={css.text}>
                    <span>{item.publishDate}</span>
                    <h2 className={css.title}>{item.name}</h2>
                  </div>
                  <CutDescription description={item.description} />
                </div>
              </div>
            ))
          )}
        </div>

        <div className={css.eventlayout}>
          {event.length === 0 ? (
            <div className={css.items}>No any events</div>
          ) : (
            event.map(item => (
              <div className={css.eventbox} key={item.id}>
                <div className={css.date}>
                  <h5>Event date:</h5>
                  <span className={css.evntDate}>{item.date}</span>
                </div>
                <div className={css.eventtitle}>
                  <h3 className={css.title}>{item.name}</h3>
                </div>
                <div className={css.eventdescr}>
                  <div className={css.eventdescrItem}>
                    <h5>Venue:</h5>
                    <h5>Organizer:</h5>
                    <h5>Participants:</h5>
                  </div>
                  <div className={css.eventdescrItem}>
                    <span>{item.venue}</span>
                    <span>{item.organizer}</span>
                    <span>{item.participants}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Loader>
  );
};

export default News;