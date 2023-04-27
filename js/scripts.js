//a dataset of polluting buildings
const BuildingData = [
    {
        "Property Name": "St. Barnabas Nursing Home 1",
        "Largest Property Use Type": "Senior Living Community",
        "Total GHG Emissions (Metric Tons CO2e)": 4250113.4,
        "Latitude": 40.853346,
        "Longitude": -73.891611
    },
    {
        "Property Name": "St. Barnabas Parent",
        "Largest Property Use Type": "Senior Living Community",
        "Total GHG Emissions (Metric Tons CO2e)": 4250113.4,
        "Latitude": 40.852341,
        "Longitude": -73.890409
    },
    {
        "Property Name": "DHQ CMT Markle - 2019+",
        "Largest Property Use Type": "Office",
        "Total GHG Emissions (Metric Tons CO2e)": 1179694.6,
        "Latitude": 40.737704,
        "Longitude": -73.997676
    },
    {
        "Property Name": "Pratt S.I. Campus - Total",
        "Largest Property Use Type": "Manufacturing/Industrial Plant",
        "Total GHG Emissions (Metric Tons CO2e)": 130468.7,
        "Latitude": 40.586217,
        "Longitude": -74.200825
    },
    {
        "Property Name": "Spring Creek Towers",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 99784.7,
        "Latitude": 40.649131,
        "Longitude": -73.879665
    },
    {
        "Property Name": "Benchmarking Group - 211",
        "Largest Property Use Type": "Prison/Incarceration",
        "Total GHG Emissions (Metric Tons CO2e)": 92930.6,
        "Latitude": 40.790576,
        "Longitude": -73.881894
    },
    {
        "Property Name": "DOC_9202_Rikers Island Bakery",
        "Largest Property Use Type": "Food Service",
        "Total GHG Emissions (Metric Tons CO2e)": 83019.5,
        "Latitude": 40.790312,
        "Longitude": -73.884412
    },
    {
        "Property Name": "NYU: Washington Square CoGen Campus",
        "Largest Property Use Type": "College/University",
        "Total GHG Emissions (Metric Tons CO2e)": 80536.7,
        "Latitude": 40.729766,
        "Longitude": -73.997027
    },
    {
        "Property Name": "Hamilton Hall",
        "Largest Property Use Type": "Residence Hall/Dormitory",
        "Total GHG Emissions (Metric Tons CO2e)": 79724.3,
        "Latitude": 40.806508,
        "Longitude": -73.961291
    },
    {
        "Property Name": "LL84 NYU Langone Health - Main Campus",
        "Largest Property Use Type": "Hospital (General Medical & Surgical)",
        "Total GHG Emissions (Metric Tons CO2e)": 75008,
        "Latitude": 40.742293,
        "Longitude": -73.974594
    },
    {
        "Property Name": "LL84 NYU Langone Health Main (minus Smilow & Skirball)",
        "Largest Property Use Type": "Hospital (General Medical & Surgical)",
        "Total GHG Emissions (Metric Tons CO2e)": 69777.6,
        "Latitude": 40.742518,
        "Longitude": -73.974432
    },
    {
        "Property Name": "Warren Weaver Hall",
        "Largest Property Use Type": "College/University",
        "Total GHG Emissions (Metric Tons CO2e)": 67789.2,
        "Latitude": 40.728413,
        "Longitude": -73.995414
    },
    {
        "Property Name": "CEPSR Schapiro",
        "Largest Property Use Type": "College/University",
        "Total GHG Emissions (Metric Tons CO2e)": 58370.2,
        "Latitude": 40.809752,
        "Longitude": -73.960217
    },
    {
        "Property Name": "169-65 137th Avenue - Rochdale Village",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 56056.5,
        "Latitude": 40.672622,
        "Longitude": -73.770641
    },
    {
        "Property Name": "Parkchester South",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 54811.7,
        "Latitude": 40.841727,
        "Longitude": -73.85979
    },
    {
        "Property Name": "2020 East Tremont Avenue",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 50174,
        "Latitude": 40.841773,
        "Longitude": -73.859406
    },
    {
        "Property Name": "1980-2040 East Tremont Avenue (Parent Property)",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 50174,
        "Latitude": 40.841667,
        "Longitude": -73.860328
    },
    {
        "Property Name": "1250-1300 Morris Park Avenue (South Campus, Lot 1)",
        "Largest Property Use Type": "Other",
        "Total GHG Emissions (Metric Tons CO2e)": 49718.3,
        "Latitude": 40.851182,
        "Longitude": -73.844823
    },
    {
        "Property Name": "Rockefeller Center (All Bldgs)",
        "Largest Property Use Type": "Office",
        "Total GHG Emissions (Metric Tons CO2e)": 49554.8,
        "Latitude": 40.759268,
        "Longitude": -73.977844
    },
    {
        "Property Name": "NYP Cornell (East Campus)",
        "Largest Property Use Type": "Hospital (General Medical & Surgical)",
        "Total GHG Emissions (Metric Tons CO2e)": 49347.6,
        "Latitude": 40.764149,
        "Longitude": -73.955251
    },
    {
        "Property Name": "RIIS/RIIS II/WALD/BARUCH/BARUCH HOUSES ADDITION CAMPUS",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 47648.1,
        "Latitude": 40.725076,
        "Longitude": -73.975009
    },
    {
        "Property Name": "Benchmarking Group - 212",
        "Largest Property Use Type": "Hospital (General Medical & Surgical)",
        "Total GHG Emissions (Metric Tons CO2e)": 45718.5,
        "Latitude": 40.739173,
        "Longitude": -73.976862
    },
    {
        "Property Name": "13 West 54th Street",
        "Largest Property Use Type": "Office",
        "Total GHG Emissions (Metric Tons CO2e)": 44679.4,
        "Latitude": 40.761367,
        "Longitude": -73.976129
    },
    {
        "Property Name": "Benchmarking Group - 38",
        "Largest Property Use Type": "Hospital (General Medical & Surgical)",
        "Total GHG Emissions (Metric Tons CO2e)": 43937.1,
        "Latitude": 40.655762,
        "Longitude": -73.94458
    },
    {
        "Property Name": "111 Eighth Avenue",
        "Largest Property Use Type": "Office",
        "Total GHG Emissions (Metric Tons CO2e)": 40475.2,
        "Latitude": 40.740704,
        "Longitude": -74.001844
    },
    {
        "Property Name": "Benchmarking Group - 10",
        "Largest Property Use Type": "College/University",
        "Total GHG Emissions (Metric Tons CO2e)": 37026.6,
        "Latitude": 40.819196,
        "Longitude": -73.950221
    },
    {
        "Property Name": "NH LIJ Medical",
        "Largest Property Use Type": "Hospital (General Medical & Surgical)",
        "Total GHG Emissions (Metric Tons CO2e)": 36208.4,
        "Latitude": 40.753347,
        "Longitude": -73.706795
    },
    {
        "Property Name": "Rockefeller University Main Campus",
        "Largest Property Use Type": "Laboratory",
        "Total GHG Emissions (Metric Tons CO2e)": 35883.9,
        "Latitude": 40.763134,
        "Longitude": -73.956451
    },
    {
        "Property Name": "H+H_9691_Bellevue Hospital: Center",
        "Largest Property Use Type": "Hospital (General Medical & Surgical)",
        "Total GHG Emissions (Metric Tons CO2e)": 34131.1,
        "Latitude": 40.739173,
        "Longitude": -73.976862
    },
    {
        "Property Name": "H+H_4318_Kings County Hospital: Buildings A, B, C",
        "Largest Property Use Type": "Hospital (General Medical & Surgical)",
        "Total GHG Emissions (Metric Tons CO2e)": 33771.1,
        "Latitude": 40.655762,
        "Longitude": -73.94458
    },
    {
        "Property Name": "DEP > BWT_9611_Newtown Creek WPCP Campus",
        "Largest Property Use Type": "Wastewater Treatment Plant",
        "Total GHG Emissions (Metric Tons CO2e)": 32742.7,
        "Latitude": 40.731483,
        "Longitude": -73.946271
    },
    {
        "Property Name": "Warbasse House",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 32092.8,
        "Latitude": 40.581696,
        "Longitude": -73.974494
    },
    {
        "Property Name": "20-30 Hudson Yards",
        "Largest Property Use Type": "Office",
        "Total GHG Emissions (Metric Tons CO2e)": 32057.2,
        "Latitude": 40.753992,
        "Longitude": -73.99983
    },
    {
        "Property Name": "Hotel Edison",
        "Largest Property Use Type": "Hotel",
        "Total GHG Emissions (Metric Tons CO2e)": 31941.5,
        "Latitude": 40.759727,
        "Longitude": -73.985886
    },
    {
        "Property Name": "2701 W 6th St",
        "Largest Property Use Type": "Energy/Power Station",
        "Total GHG Emissions (Metric Tons CO2e)": 31446.7,
        "Latitude": 40.581696,
        "Longitude": -73.974494
    },
    {
        "Property Name": "DEP > BWT_859_Wards Island WPCP Campus",
        "Largest Property Use Type": "Wastewater Treatment Plant",
        "Total GHG Emissions (Metric Tons CO2e)": 30077.7,
        "Latitude": 40.783526,
        "Longitude": -73.930391
    },
    {
        "Property Name": "Northwest Corner Building",
        "Largest Property Use Type": "College/University",
        "Total GHG Emissions (Metric Tons CO2e)": 29490.2,
        "Latitude": 40.809914,
        "Longitude": -73.960607
    },
    {
        "Property Name": "Stuyvesant Town",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 28179.7,
        "Latitude": 40.731903,
        "Longitude": -73.982013
    },
    {
        "Property Name": "Stuyvesant Town",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 28179.7,
        "Latitude": 40.731903,
        "Longitude": -73.982013
    },
    {
        "Property Name": "Benchmarking Group - 33",
        "Largest Property Use Type": "College/University",
        "Total GHG Emissions (Metric Tons CO2e)": 26389.8,
        "Latitude": 40.63176,
        "Longitude": -73.952645
    },
    {
        "Property Name": "BROWNSVILLE/VAN DYKE I/VAN DYKE II/WOODSON CAMPUS",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 25993.1,
        "Latitude": 40.667224,
        "Longitude": -73.909555
    },
    {
        "Property Name": "Main Campus - Super Block",
        "Largest Property Use Type": "Other - Specialty Hospital",
        "Total GHG Emissions (Metric Tons CO2e)": 24272.9,
        "Latitude": 40.764199,
        "Longitude": -73.955695
    },
    {
        "Property Name": "30 Rockefeller Plaza (Bld 1 & 9)",
        "Largest Property Use Type": "Office",
        "Total GHG Emissions (Metric Tons CO2e)": 23841.9,
        "Latitude": 40.758754,
        "Longitude": -73.978692
    },
    {
        "Property Name": "DEP > BWT_840_North River WPCP Campus",
        "Largest Property Use Type": "Wastewater Treatment Plant",
        "Total GHG Emissions (Metric Tons CO2e)": 23208.1,
        "Latitude": 40.821384,
        "Longitude": -73.9581
    },
    {
        "Property Name": "One Bryant Park",
        "Largest Property Use Type": "Financial Office",
        "Total GHG Emissions (Metric Tons CO2e)": 23058.1,
        "Latitude": 40.755338,
        "Longitude": -73.984201
    },
    {
        "Property Name": "Western Union Building",
        "Largest Property Use Type": "Data Center",
        "Total GHG Emissions (Metric Tons CO2e)": 22391.7,
        "Latitude": 40.717876,
        "Longitude": -74.008939
    },
    {
        "Property Name": "JOHNSON/JEFFERSON CAMPUS",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 21827.9,
        "Latitude": 40.797353,
        "Longitude": -73.944654
    },
    {
        "Property Name": "Benchmarking Group - 23",
        "Largest Property Use Type": "Hospital (General Medical & Surgical)",
        "Total GHG Emissions (Metric Tons CO2e)": 21175.6,
        "Latitude": 40.857427,
        "Longitude": -73.847079
    },
    {
        "Property Name": "Metlife Building (200 Park)",
        "Largest Property Use Type": "Office",
        "Total GHG Emissions (Metric Tons CO2e)": 20977.3,
        "Latitude": 40.754162,
        "Longitude": -73.976557
    },
    {
        "Property Name": "BOULEVARD/LINDEN CAMPUS",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 20888.4,
        "Latitude": 40.66111,
        "Longitude": -73.883886
    },
    {
        "Property Name": "North Shore Towers",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 20856.9,
        "Latitude": 40.759289,
        "Longitude": -73.713493
    },
    {
        "Property Name": "QUEENSBRIDGE NORTH/QUEENSBRIDGE SOUTH CAMPUS",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 20490,
        "Latitude": 40.756011,
        "Longitude": -73.942855
    },
    {
        "Property Name": "madison square garden",
        "Largest Property Use Type": "Indoor Arena",
        "Total GHG Emissions (Metric Tons CO2e)": 20414.2,
        "Latitude": 40.750662,
        "Longitude": -73.991944
    },
    {
        "Property Name": "LEXINGTON/WASHINGTON/CARVER CAMPUS",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 20164.4,
        "Latitude": 40.788359,
        "Longitude": -73.950862
    },
    {
        "Property Name": "WHITMAN/INGERSOLL CAMPUS",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 20155.9,
        "Latitude": 40.694013,
        "Longitude": -73.97383
    },
    {
        "Property Name": "55 Water",
        "Largest Property Use Type": "Office",
        "Total GHG Emissions (Metric Tons CO2e)": 19928.5,
        "Latitude": 40.703597,
        "Longitude": -74.009781
    },
    {
        "Property Name": "RED HOOK EAST/RED HOOK WEST CAMPUS",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 19872.9,
        "Latitude": 40.675027,
        "Longitude": -74.00173
    },
    {
        "Property Name": "Queens Fresh Meadows (Parent)",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 19798.2,
        "Latitude": 40.737659,
        "Longitude": -73.781459
    },
    {
        "Property Name": "Zuckerman Research Center - MSK",
        "Largest Property Use Type": "Laboratory",
        "Total GHG Emissions (Metric Tons CO2e)": 19573.9,
        "Latitude": 40.765012,
        "Longitude": -73.957301
    },
    {
        "Property Name": "CUNY SC > CCNY_314_CCNY: North Academic Center",
        "Largest Property Use Type": "College/University",
        "Total GHG Emissions (Metric Tons CO2e)": 19501.8,
        "Latitude": 40.819196,
        "Longitude": -73.950221
    },
    {
        "Property Name": "Maimonides - Main Campus",
        "Largest Property Use Type": "Hospital (General Medical & Surgical)",
        "Total GHG Emissions (Metric Tons CO2e)": 19424.6,
        "Latitude": 40.639488,
        "Longitude": -73.998242
    },
    {
        "Property Name": "Benchmarking Group - 8",
        "Largest Property Use Type": "Hospital (General Medical & Surgical)",
        "Total GHG Emissions (Metric Tons CO2e)": 19043.4,
        "Latitude": 40.814358,
        "Longitude": -73.940659
    },
    {
        "Property Name": "MORRIS I/MORRIS II/MORRISANIA CAMPUS",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 19040.9,
        "Latitude": 40.834848,
        "Longitude": -73.904918
    },
    {
        "Property Name": "iES MACH Copy of One Vanderbilt",
        "Largest Property Use Type": "Office",
        "Total GHG Emissions (Metric Tons CO2e)": 18918.2,
        "Latitude": 40.75251,
        "Longitude": -73.978268
    },
    {
        "Property Name": "Harlem Hospital",
        "Largest Property Use Type": "Hospital (General Medical & Surgical)",
        "Total GHG Emissions (Metric Tons CO2e)": 18794.9,
        "Latitude": 40.814201,
        "Longitude": -73.940771
    },
    {
        "Property Name": "SHEEPSHEAD BAY/NOSTRAND CAMPUS",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 18180.8,
        "Latitude": 40.594125,
        "Longitude": -73.937859
    },
    {
        "Property Name": "Penn South",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 17965.2,
        "Latitude": 40.747116,
        "Longitude": -73.997178
    },
    {
        "Property Name": "Benchmarking Group - 17",
        "Largest Property Use Type": "Zoo",
        "Total GHG Emissions (Metric Tons CO2e)": 17805.3,
        "Latitude": 40.850562,
        "Longitude": -73.882453
    },
    {
        "Property Name": "H+H_4151_Harlem Hospital: Martin Luther King Pavilion",
        "Largest Property Use Type": "Hospital (General Medical & Surgical)",
        "Total GHG Emissions (Metric Tons CO2e)": 17534.8,
        "Latitude": 40.814358,
        "Longitude": -73.940659
    },
    {
        "Property Name": "CIG > WCS BZ_632_Bronx Zoo: Cogeneration Plant",
        "Largest Property Use Type": "Zoo",
        "Total GHG Emissions (Metric Tons CO2e)": 17412.5,
        "Latitude": 40.850562,
        "Longitude": -73.882453
    },
    {
        "Property Name": "Time Warner Center",
        "Largest Property Use Type": "Office",
        "Total GHG Emissions (Metric Tons CO2e)": 17377.3,
        "Latitude": 40.767815,
        "Longitude": -73.982267
    },
    {
        "Property Name": "Jacobi Medical Center",
        "Largest Property Use Type": "Hospital (General Medical & Surgical)",
        "Total GHG Emissions (Metric Tons CO2e)": 17327.9,
        "Latitude": 40.857427,
        "Longitude": -73.847079
    },
    {
        "Property Name": "H+H_4295_Jacobi Medical Center: Jacobi Building",
        "Largest Property Use Type": "Hospital (General Medical & Surgical)",
        "Total GHG Emissions (Metric Tons CO2e)": 17311.4,
        "Latitude": 40.857427,
        "Longitude": -73.847079
    },
    {
        "Property Name": "Woodhull Medical & Mental Health Center",
        "Largest Property Use Type": "Hospital (General Medical & Surgical)",
        "Total GHG Emissions (Metric Tons CO2e)": 17141.1,
        "Latitude": 40.700528,
        "Longitude": -73.941604
    },
    {
        "Property Name": "CUNY SC > BKC_405_Brooklyn College: Heating Plant",
        "Largest Property Use Type": "College/University",
        "Total GHG Emissions (Metric Tons CO2e)": 16652.5,
        "Latitude": 40.629967,
        "Longitude": -73.957186
    },
    {
        "Property Name": "277 Park Ave - 5219460802",
        "Largest Property Use Type": "Office",
        "Total GHG Emissions (Metric Tons CO2e)": 16587.1,
        "Latitude": 40.755564,
        "Longitude": -73.975138
    },
    {
        "Property Name": "PENN 1",
        "Largest Property Use Type": "Office",
        "Total GHG Emissions (Metric Tons CO2e)": 16328.2,
        "Latitude": 40.751098,
        "Longitude": -73.992926
    },
    {
        "Property Name": "DEP > BWT_9608_Coney Island WPCP Campus",
        "Largest Property Use Type": "Wastewater Treatment Plant",
        "Total GHG Emissions (Metric Tons CO2e)": 16215.1,
        "Latitude": 40.590902,
        "Longitude": -73.932295
    },
    {
        "Property Name": "Mutual Redevelopment -Penn South - Building 4",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 16211.7,
        "Latitude": 40.746948,
        "Longitude": -73.997272
    },
    {
        "Property Name": "Benchmarking Group - 115",
        "Largest Property Use Type": "Hospital (General Medical & Surgical)",
        "Total GHG Emissions (Metric Tons CO2e)": 16151.6,
        "Latitude": 40.700528,
        "Longitude": -73.941604
    },
    {
        "Property Name": "345 Park Ave LP",
        "Largest Property Use Type": "Office",
        "Total GHG Emissions (Metric Tons CO2e)": 16114.1,
        "Latitude": 40.758171,
        "Longitude": -73.973246
    },
    {
        "Property Name": "H+H_4327_Woodhull Medical and Mental Health Center",
        "Largest Property Use Type": "Hospital (General Medical & Surgical)",
        "Total GHG Emissions (Metric Tons CO2e)": 16082.8,
        "Latitude": 40.700528,
        "Longitude": -73.941604
    },
    {
        "Property Name": "DEP > BWT_9607_Bowery Bay WPCP Campus",
        "Largest Property Use Type": "Wastewater Treatment Plant",
        "Total GHG Emissions (Metric Tons CO2e)": 16080.3,
        "Latitude": 40.778421,
        "Longitude": -73.894593
    },
    {
        "Property Name": "NH Lenox Hill",
        "Largest Property Use Type": "Hospital (General Medical & Surgical)",
        "Total GHG Emissions (Metric Tons CO2e)": 16051.4,
        "Latitude": 40.774192,
        "Longitude": -73.961137
    },
    {
        "Property Name": "Lindsay Park",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 15932.5,
        "Latitude": 40.705512,
        "Longitude": -73.947161
    },
    {
        "Property Name": "MSHS. Mount Sinai Morningside",
        "Largest Property Use Type": "Other - Specialty Hospital",
        "Total GHG Emissions (Metric Tons CO2e)": 15929.1,
        "Latitude": 40.805841,
        "Longitude": -73.961751
    },
    {
        "Property Name": "MS The Center for Science and Medicine",
        "Largest Property Use Type": "Other - Specialty Hospital",
        "Total GHG Emissions (Metric Tons CO2e)": 15790.1,
        "Latitude": 40.79159,
        "Longitude": -73.95269
    },
    {
        "Property Name": "DEP > BWT_9609_Hunts Point WPCP Campus",
        "Largest Property Use Type": "Wastewater Treatment Plant",
        "Total GHG Emissions (Metric Tons CO2e)": 15700.1,
        "Latitude": 40.804742,
        "Longitude": -73.885322
    },
    {
        "Property Name": "Fordham. Rose Hill MAIN",
        "Largest Property Use Type": "College/University",
        "Total GHG Emissions (Metric Tons CO2e)": 15630.3,
        "Latitude": 40.860733,
        "Longitude": -73.889535
    },
    {
        "Property Name": "One New York Plaza",
        "Largest Property Use Type": "Office",
        "Total GHG Emissions (Metric Tons CO2e)": 15527.4,
        "Latitude": 40.702444,
        "Longitude": -74.012742
    },
    {
        "Property Name": "Benchmarking Group - 45",
        "Largest Property Use Type": "Hospital (General Medical & Surgical)",
        "Total GHG Emissions (Metric Tons CO2e)": 15447,
        "Latitude": 40.744416,
        "Longitude": -73.886097
    },
    {
        "Property Name": "111 East 210th Street",
        "Largest Property Use Type": "Hospital (General Medical & Surgical)",
        "Total GHG Emissions (Metric Tons CO2e)": 15414.3,
        "Latitude": 40.879885,
        "Longitude": -73.880481
    },
    {
        "Property Name": "Parkchester North Campus (BBL 2039447501)",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 15389.8,
        "Latitude": 40.838834,
        "Longitude": -73.860229
    },
    {
        "Property Name": "32 Sixth Avenue Company LLC (NEW PROFILE)",
        "Largest Property Use Type": "Office",
        "Total GHG Emissions (Metric Tons CO2e)": 15366.9,
        "Latitude": 40.72008,
        "Longitude": -74.005184
    },
    {
        "Property Name": "CBS Broadcast Center",
        "Largest Property Use Type": "Office",
        "Total GHG Emissions (Metric Tons CO2e)": 15189.4,
        "Latitude": 40.770073,
        "Longitude": -73.990852
    },
    {
        "Property Name": "H+H_4330_Elmhurst Hospital: Main Building",
        "Largest Property Use Type": "Hospital (General Medical & Surgical)",
        "Total GHG Emissions (Metric Tons CO2e)": 15074.7,
        "Latitude": 40.744416,
        "Longitude": -73.886097
    },
    {
        "Property Name": "Manhattanville Campus",
        "Largest Property Use Type": "College/University",
        "Total GHG Emissions (Metric Tons CO2e)": 14928.4,
        "Latitude": 40.816487,
        "Longitude": -73.958208
    },
    {
        "Property Name": "CLASON POINT GARDENS/SOUNDVIEW CAMPUS",
        "Largest Property Use Type": "Multifamily Housing",
        "Total GHG Emissions (Metric Tons CO2e)": 14900.4,
        "Latitude": 40.822381,
        "Longitude": -73.868057
    },
    {
        "Property Name": "David H Koch Center",
        "Largest Property Use Type": "Hospital (General Medical & Surgical)",
        "Total GHG Emissions (Metric Tons CO2e)": 14799.9,
        "Latitude": 40.764575,
        "Longitude": -73.955421
    },
    {
        "Property Name": "277 Park Avenue",
        "Largest Property Use Type": "Office",
        "Total GHG Emissions (Metric Tons CO2e)": 14732.7,
        "Latitude": 40.755564,
        "Longitude": -73.975138
    }
]


// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = 'pk.eyJ1IjoibWF4d2FuZ21vZGMiLCJhIjoiY2xnNXFpa251MDVzZTNtbzhwNXdlanVlaiJ9.GD8JDqHptdwCss1PtVZkcg';

const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/light-v11', // style URL
    center: [-73.9948020038122, 40.735146045214435], // starting position [lng, lat]
    zoom: 12 // starting zoom
});


// ADD MARKERS

BuildingData.forEach(function (BuildingRecord) {

    // create the popup
    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        'Property Name: ' + BuildingRecord["Property Name"]
        + ' GHG Emission (ton of CO2): ' + BuildingRecord["Total GHG Emissions (Metric Tons CO2e)"]
        + ' Property Use: ' + BuildingRecord["Largest Property Use Type"]
    );

    //Color each marker based on largest property use type.

    let color = '#ccc'

    if (BuildingRecord["Largest Property Use Type"] === 'College/University') {
        color = '#57068c'
    }

    if (BuildingRecord["Largest Property Use Type"] === 'Multifamily Housing') {
        color = '#e0ca3c'
    }

    if (BuildingRecord["Largest Property Use Type"] === 'Hospital (General Medical & Surgical)') {
        color = '#136F63'
    }

    if (BuildingRecord["Largest Property Use Type"] === 'Office') {
        color = '#000F08'
    }

    if (BuildingRecord["Largest Property Use Type"] === 'Wastewater Treatment Plant') {
        color = '#F34213'
    }

    // Create a default Marker and add it to the map.
    new mapboxgl.Marker({
        color: color
    })
        .setLngLat([BuildingRecord.Longitude, BuildingRecord.Latitude])
        .setPopup(popup)
        .addTo(map);

})

// event listeners

$('#fly-to-the-dirtest').on('click', function () {
    map.flyTo({
        center: [-73.891611, 40.853346],
        zoom: 16
    })
})

map.on('load', function () {
    // import the borough boundary
    map.addSource('borough_boundaries', {
        type: 'geojson',
        data: './data/borough_boundaries.geojson'
    })
    //Color the borough based on the number of dirtest 100 it contains. 
    map.addLayer({
        id: 'fill-borough',
        type: 'fill',
        source: 'borough_boundaries',
        paint: {
            'fill-color': [
                'interpolate',
                ['linear'],
                ['get', 'buildings'],
                1,
                '#ffffb2',
                15,
                '#fecc5c',
                30,
                '#fd8d3c',
                45,
                '#f03b20',
                60,
                '#bd0026'
            ]
        }
    })



    //Now, we will add a pop up that shows how much dirty 100 is in each borough.
    let popup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false });
    // display only when hovered
    map.on('mouseenter', 'fill-borough', (e) => {
        console.log('foo', e.features)

        popup.setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.boro_name + ', # of Buildings: ' + e.features[0].properties.buildings)
            .addTo(map);
    });
    //disappear when unhovered
    map.on('mouseleave', 'fill-borough', () => {
        popup.remove();
    });




})
