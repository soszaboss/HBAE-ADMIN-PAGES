import {
    ListsWidget4,
    ListsWidget5,
    TableEquipemtsWidget,
    MixedWidget13,
    MixedWidget14,
    MixedWidget15,} from '../../../_metronic/partials/widgets'


const EquipementsPage = () => (
    <>
      <div className='row gy-5 g-xl-10'>
        {/*begin::Col*/}
        <div className='col-xl-4'>
          <MixedWidget13
            className='card-xl-stretch mb-xl-10'
            backGroundColor='#F7D9E3'
            chartHeight='100px'
          />
        </div>
        {/*end::Col*/}
  
        {/*begin::Col*/}
        <div className='col-xl-4'>
          <MixedWidget14
            className='card-xl-stretch mb-xl-10'
            backGroundColor='#CBF0F4'
            chartHeight='100px'
          />
        </div>
        {/*end::Col*/}
  
        {/*begin::Col*/}
        <div className='col-xl-4'>
          <MixedWidget15 className='card-xl-stretch mb-xl-10' backGroundColor='#CBD4F4' />
        </div>
        {/*end::Col*/}
      </div>
      {/*end::Row*/}
  
      <TableEquipemtsWidget className='mb-5 mb-xl-10' />
  
      {/*begin::Row*/}
      <div className='row gy-5 g-xl-10'>
        {/*begin::Col*/}
        <div className='col-xxl-6'>
          <ListsWidget5 className='card-xl-stretch mb-xl-10' activityName='Equipement(s) Activité(s)' activityNumber={8}/>
        </div>
        {/*end::Col*/}
  
        {/*begin::Col*/}
        <div className='col-xxl-6'>
          <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-10' items={5} latestTrends='Equipements Trend'/>
        </div>
        {/*end::Col*/}
      </div>
    </>
  )

export default EquipementsPage