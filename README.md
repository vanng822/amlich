## amlich

[![build status](https://secure.travis-ci.org/vanng822/amlich.png)](http://travis-ci.org/vanng822/amlich)

Hồ Ngọc Đức Lunar Calendar (Am lich) running in Nodejs

Go to the link bellow for more detail
http://www.informatik.uni-leipzig.de/~duc/amlich/

## Functions

### jdFromDate(dd, mm, yyyy)

Calculate Julian day number (the number of days between 1/1/4713 BC (Julian calendar) and dd/mm/yyyy)

### jdToDate(jd)

Convert a Julian day number to day/month/year

### convertLunar2Solar(lunarDay, lunarMonth, lunarYear, lunarLeap, timeZone)

Convert a lunar date to the corresponding solar date

### convertSolar2Lunar(dd, mm, yyyy, timeZone)

Convert solar date dd/mm/yyyy to the corresponding lunar date
