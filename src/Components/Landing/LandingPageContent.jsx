import React from 'react'
import CoolWorkPlaces from './CoolWorkPlaces';
import TopCompaniesHiring from './TopCompaniesHiring';
import WhyShine from './WhyShine';
import ShinePremium from './ShinePremium';
import JobAlerts from './JobAlerts';
import ResumeHelper from './ResumeHelper';
import ShineLearning from './ShineLearning';
import BestSellingCourses from './BestSellingCourses';
import BrowseJobs from './BrowseJobs';
import RecruitSmart from './RecruitSmart';
import InfosysAdvt from './InfosysAdvt';
import LandingPageFooter from './LandingPageFooter';
import LandingPageHeader from './LandingPageHeader';

const LandingPageContent = () => {
    return (
        <div>
            <LandingPageHeader/>
            <CoolWorkPlaces/>
            <TopCompaniesHiring/>
            <WhyShine/>
            <ShinePremium/>
            <JobAlerts/>
            <ResumeHelper/>
            <ShineLearning/>
            <BestSellingCourses/>
            <BrowseJobs/>
            <RecruitSmart/>
            <InfosysAdvt/>
            <LandingPageFooter/>
        </div>
    )
}

export default LandingPageContent
