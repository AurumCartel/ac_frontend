import {VideoLesson} from './Video';

export interface CourseDetailsProps {
    videoLessons: VideoLesson[];
    defaultVideoId?: number;
}