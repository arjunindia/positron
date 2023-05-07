export interface Movie {
  short: Short;
  imdbId: string;
  top: Top;
  main: Main;
}
export interface Short {
  @context: string;
  @type: string;
  url: string;
  name: string;
  description: string;
  genre?: (string)[] | null;
  datePublished: string;
  actor?: (ActorEntityOrDirectorEntity)[] | null;
  director?: (ActorEntityOrDirectorEntity)[] | null;
  creator?: (CreatorEntity)[] | null;
  duration: string;
}
export interface ActorEntityOrDirectorEntity {
  @type: string;
  url: string;
  name: string;
}
export interface CreatorEntity {
  @type: string;
  url: string;
  name?: string | null;
}
export interface Top {
  id: string;
  productionStatus: ProductionStatus;
  canHaveEpisodes: boolean;
  series?: null;
  titleText: NameTextOrCompanyTextOrTitleTextOrOriginalTitleTextOrCategory;
  titleType: TitleType;
  originalTitleText: NameTextOrCompanyTextOrTitleTextOrOriginalTitleTextOrCategory;
  certificate?: null;
  releaseYear: ReleaseYear;
  releaseDate: ReleaseDate;
  runtime: Runtime;
  canRate: CanRate;
  ratingsSummary: RatingsSummary;
  meterRanking?: null;
  primaryImage?: null;
  images: ImagesOrVideosOrExternalLinksOrCreditsOrReviewsOrCriticReviewsTotalOrTriviaTotalOrSubNavCreditsOrSubNavReviewsOrSubNavTriviaOrWinsOrNominationsOrGoofsTotalOrQuotesTotalOrFaqsTotalOrCompanies;
  videos: ImagesOrVideosOrExternalLinksOrCreditsOrReviewsOrCriticReviewsTotalOrTriviaTotalOrSubNavCreditsOrSubNavReviewsOrSubNavTriviaOrWinsOrNominationsOrGoofsTotalOrQuotesTotalOrFaqsTotalOrCompanies;
  primaryVideos: PrimaryVideosOrFeaturedReviewsOrVideoStripOrMoreLikeThisTitlesOrTriviaOrGoofsOrQuotesOrCrazyCreditsOrConnectionsOrSoundtrackOrFaqsOrAkas;
  externalLinks: ImagesOrVideosOrExternalLinksOrCreditsOrReviewsOrCriticReviewsTotalOrTriviaTotalOrSubNavCreditsOrSubNavReviewsOrSubNavTriviaOrWinsOrNominationsOrGoofsTotalOrQuotesTotalOrFaqsTotalOrCompanies;
  metacritic?: null;
  keywords: KeywordsOrTitleMainImagesOrAlternateVersionsOrDetailsExternalLinksOrFilmingLocations;
  genres: Genres;
  plot: Plot;
  plotContributionLink: PlotContributionLinkOrContributionLinkOrImageUploadLinkOrIframeAddReviewLink;
  credits: ImagesOrVideosOrExternalLinksOrCreditsOrReviewsOrCriticReviewsTotalOrTriviaTotalOrSubNavCreditsOrSubNavReviewsOrSubNavTriviaOrWinsOrNominationsOrGoofsTotalOrQuotesTotalOrFaqsTotalOrCompanies;
  principalCredits?: (PrincipalCreditsEntity)[] | null;
  reviews: ImagesOrVideosOrExternalLinksOrCreditsOrReviewsOrCriticReviewsTotalOrTriviaTotalOrSubNavCreditsOrSubNavReviewsOrSubNavTriviaOrWinsOrNominationsOrGoofsTotalOrQuotesTotalOrFaqsTotalOrCompanies;
  criticReviewsTotal: ImagesOrVideosOrExternalLinksOrCreditsOrReviewsOrCriticReviewsTotalOrTriviaTotalOrSubNavCreditsOrSubNavReviewsOrSubNavTriviaOrWinsOrNominationsOrGoofsTotalOrQuotesTotalOrFaqsTotalOrCompanies;
  triviaTotal: ImagesOrVideosOrExternalLinksOrCreditsOrReviewsOrCriticReviewsTotalOrTriviaTotalOrSubNavCreditsOrSubNavReviewsOrSubNavTriviaOrWinsOrNominationsOrGoofsTotalOrQuotesTotalOrFaqsTotalOrCompanies;
  engagementStatistics?: null;
  subNavCredits: ImagesOrVideosOrExternalLinksOrCreditsOrReviewsOrCriticReviewsTotalOrTriviaTotalOrSubNavCreditsOrSubNavReviewsOrSubNavTriviaOrWinsOrNominationsOrGoofsTotalOrQuotesTotalOrFaqsTotalOrCompanies;
  subNavReviews: ImagesOrVideosOrExternalLinksOrCreditsOrReviewsOrCriticReviewsTotalOrTriviaTotalOrSubNavCreditsOrSubNavReviewsOrSubNavTriviaOrWinsOrNominationsOrGoofsTotalOrQuotesTotalOrFaqsTotalOrCompanies;
  subNavTrivia: ImagesOrVideosOrExternalLinksOrCreditsOrReviewsOrCriticReviewsTotalOrTriviaTotalOrSubNavCreditsOrSubNavReviewsOrSubNavTriviaOrWinsOrNominationsOrGoofsTotalOrQuotesTotalOrFaqsTotalOrCompanies;
  meta: Meta;
  castPageTitle: CastPageTitle;
  creatorsPageTitle?: (null)[] | null;
  directorsPageTitle?: (DirectorsPageTitleEntity)[] | null;
  countriesOfOrigin: CountriesOfOrigin;
  production: Production;
  featuredReviews: PrimaryVideosOrFeaturedReviewsOrVideoStripOrMoreLikeThisTitlesOrTriviaOrGoofsOrQuotesOrCrazyCreditsOrConnectionsOrSoundtrackOrFaqsOrAkas;
  __typename: string;
}
export interface ProductionStatus {
  currentProductionStage: StatusOrCurrentProductionStageOrGenresEntityOrCategoryOrCountryOrCountriesEntityOrSpokenLanguagesEntity;
  productionStatusHistory?: (ProductionStatusHistoryEntity)[] | null;
  restriction?: null;
  __typename: string;
}
export interface StatusOrCurrentProductionStageOrGenresEntityOrCategoryOrCountryOrCountriesEntityOrSpokenLanguagesEntity {
  id: string;
  text: string;
  __typename: string;
}
export interface ProductionStatusHistoryEntity {
  status: StatusOrCurrentProductionStageOrGenresEntityOrCategoryOrCountryOrCountriesEntityOrSpokenLanguagesEntity;
  __typename: string;
}
export interface NameTextOrCompanyTextOrTitleTextOrOriginalTitleTextOrCategory {
  text: string;
  __typename: string;
}
export interface TitleType {
  displayableProperty: DisplayableProperty;
  text: string;
  id: string;
  isSeries: boolean;
  isEpisode: boolean;
  categories?: (CategoriesEntity)[] | null;
  canHaveEpisodes: boolean;
  __typename: string;
}
export interface DisplayableProperty {
  value: ValueOrPlotText;
  __typename: string;
}
export interface ValueOrPlotText {
  plainText: string;
  __typename: string;
}
export interface CategoriesEntity {
  value: string;
  __typename: string;
}
export interface ReleaseYear {
  year: number;
  endYear?: null;
  __typename: string;
}
export interface ReleaseDate {
  day: number;
  month: number;
  year: number;
  __typename: string;
}
export interface Runtime {
  seconds: number;
  displayableProperty: DisplayableProperty;
  __typename: string;
}
export interface CanRate {
  isRatable: boolean;
  __typename: string;
}
export interface RatingsSummary {
  aggregateRating?: null;
  voteCount: number;
  __typename: string;
}
export interface ImagesOrVideosOrExternalLinksOrCreditsOrReviewsOrCriticReviewsTotalOrTriviaTotalOrSubNavCreditsOrSubNavReviewsOrSubNavTriviaOrWinsOrNominationsOrGoofsTotalOrQuotesTotalOrFaqsTotalOrCompanies {
  total: number;
  __typename: string;
}
export interface PrimaryVideosOrFeaturedReviewsOrVideoStripOrMoreLikeThisTitlesOrTriviaOrGoofsOrQuotesOrCrazyCreditsOrConnectionsOrSoundtrackOrFaqsOrAkas {
  edges?: (null)[] | null;
  __typename: string;
}
export interface KeywordsOrTitleMainImagesOrAlternateVersionsOrDetailsExternalLinksOrFilmingLocations {
  total: number;
  edges?: (null)[] | null;
  __typename: string;
}
export interface Genres {
  genres?: (StatusOrCurrentProductionStageOrGenresEntityOrCategoryOrCountryOrCountriesEntityOrSpokenLanguagesEntity)[] | null;
  __typename: string;
}
export interface Plot {
  plotText: ValueOrPlotText;
  language: LanguageOrCountriesEntityOrCategory;
  __typename: string;
}
export interface LanguageOrCountriesEntityOrCategory {
  id: string;
  __typename: string;
}
export interface PlotContributionLinkOrContributionLinkOrImageUploadLinkOrIframeAddReviewLink {
  url: string;
  __typename: string;
}
export interface PrincipalCreditsEntity {
  totalCredits: number;
  category: StatusOrCurrentProductionStageOrGenresEntityOrCategoryOrCountryOrCountriesEntityOrSpokenLanguagesEntity;
  credits?: (CreditsEntity)[] | null;
  __typename: string;
}
export interface CreditsEntity {
  name: Name;
  attributes?: null;
  __typename: string;
}
export interface Name {
  nameText: NameTextOrCompanyTextOrTitleTextOrOriginalTitleTextOrCategory;
  id: string;
  __typename: string;
}
export interface Meta {
  canonicalId: string;
  publicationStatus: string;
  __typename: string;
}
export interface CastPageTitle {
  edges?: (EdgesEntity)[] | null;
  __typename: string;
}
export interface EdgesEntity {
  node: NodeOrCreditsEntity;
  __typename: string;
}
export interface NodeOrCreditsEntity {
  name: Name1;
  __typename: string;
}
export interface Name1 {
  nameText: NameTextOrCompanyTextOrTitleTextOrOriginalTitleTextOrCategory;
  __typename: string;
}
export interface DirectorsPageTitleEntity {
  credits?: (NodeOrCreditsEntity)[] | null;
  __typename: string;
}
export interface CountriesOfOrigin {
  countries?: (LanguageOrCountriesEntityOrCategory)[] | null;
  __typename: string;
}
export interface Production {
  edges?: (EdgesEntity1)[] | null;
  __typename: string;
}
export interface EdgesEntity1 {
  node: Node;
  __typename: string;
}
export interface Node {
  company: Company;
  __typename: string;
}
export interface Company {
  id: string;
  companyText: NameTextOrCompanyTextOrTitleTextOrOriginalTitleTextOrCategory;
  __typename: string;
}
export interface Main {
  id: string;
  wins: ImagesOrVideosOrExternalLinksOrCreditsOrReviewsOrCriticReviewsTotalOrTriviaTotalOrSubNavCreditsOrSubNavReviewsOrSubNavTriviaOrWinsOrNominationsOrGoofsTotalOrQuotesTotalOrFaqsTotalOrCompanies;
  nominations: ImagesOrVideosOrExternalLinksOrCreditsOrReviewsOrCriticReviewsTotalOrTriviaTotalOrSubNavCreditsOrSubNavReviewsOrSubNavTriviaOrWinsOrNominationsOrGoofsTotalOrQuotesTotalOrFaqsTotalOrCompanies;
  prestigiousAwardSummary?: null;
  ratingsSummary: RatingsSummary1;
  episodes?: null;
  videos: ImagesOrVideosOrExternalLinksOrCreditsOrReviewsOrCriticReviewsTotalOrTriviaTotalOrSubNavCreditsOrSubNavReviewsOrSubNavTriviaOrWinsOrNominationsOrGoofsTotalOrQuotesTotalOrFaqsTotalOrCompanies;
  videoStrip: PrimaryVideosOrFeaturedReviewsOrVideoStripOrMoreLikeThisTitlesOrTriviaOrGoofsOrQuotesOrCrazyCreditsOrConnectionsOrSoundtrackOrFaqsOrAkas;
  titleMainImages: KeywordsOrTitleMainImagesOrAlternateVersionsOrDetailsExternalLinksOrFilmingLocations;
  productionStatus: ProductionStatus;
  primaryImage?: null;
  imageUploadLink: PlotContributionLinkOrContributionLinkOrImageUploadLinkOrIframeAddReviewLink;
  titleType: TitleType1;
  cast: Cast;
  creators?: (null)[] | null;
  directors?: (DirectorsEntityOrWritersEntity)[] | null;
  writers?: (DirectorsEntityOrWritersEntity)[] | null;
  isAdult: boolean;
  moreLikeThisTitles: PrimaryVideosOrFeaturedReviewsOrVideoStripOrMoreLikeThisTitlesOrTriviaOrGoofsOrQuotesOrCrazyCreditsOrConnectionsOrSoundtrackOrFaqsOrAkas;
  triviaTotal: ImagesOrVideosOrExternalLinksOrCreditsOrReviewsOrCriticReviewsTotalOrTriviaTotalOrSubNavCreditsOrSubNavReviewsOrSubNavTriviaOrWinsOrNominationsOrGoofsTotalOrQuotesTotalOrFaqsTotalOrCompanies;
  trivia: PrimaryVideosOrFeaturedReviewsOrVideoStripOrMoreLikeThisTitlesOrTriviaOrGoofsOrQuotesOrCrazyCreditsOrConnectionsOrSoundtrackOrFaqsOrAkas;
  goofsTotal: ImagesOrVideosOrExternalLinksOrCreditsOrReviewsOrCriticReviewsTotalOrTriviaTotalOrSubNavCreditsOrSubNavReviewsOrSubNavTriviaOrWinsOrNominationsOrGoofsTotalOrQuotesTotalOrFaqsTotalOrCompanies;
  goofs: PrimaryVideosOrFeaturedReviewsOrVideoStripOrMoreLikeThisTitlesOrTriviaOrGoofsOrQuotesOrCrazyCreditsOrConnectionsOrSoundtrackOrFaqsOrAkas;
  quotesTotal: ImagesOrVideosOrExternalLinksOrCreditsOrReviewsOrCriticReviewsTotalOrTriviaTotalOrSubNavCreditsOrSubNavReviewsOrSubNavTriviaOrWinsOrNominationsOrGoofsTotalOrQuotesTotalOrFaqsTotalOrCompanies;
  quotes: PrimaryVideosOrFeaturedReviewsOrVideoStripOrMoreLikeThisTitlesOrTriviaOrGoofsOrQuotesOrCrazyCreditsOrConnectionsOrSoundtrackOrFaqsOrAkas;
  crazyCredits: PrimaryVideosOrFeaturedReviewsOrVideoStripOrMoreLikeThisTitlesOrTriviaOrGoofsOrQuotesOrCrazyCreditsOrConnectionsOrSoundtrackOrFaqsOrAkas;
  alternateVersions: KeywordsOrTitleMainImagesOrAlternateVersionsOrDetailsExternalLinksOrFilmingLocations;
  connections: PrimaryVideosOrFeaturedReviewsOrVideoStripOrMoreLikeThisTitlesOrTriviaOrGoofsOrQuotesOrCrazyCreditsOrConnectionsOrSoundtrackOrFaqsOrAkas;
  soundtrack: PrimaryVideosOrFeaturedReviewsOrVideoStripOrMoreLikeThisTitlesOrTriviaOrGoofsOrQuotesOrCrazyCreditsOrConnectionsOrSoundtrackOrFaqsOrAkas;
  titleText: NameTextOrCompanyTextOrTitleTextOrOriginalTitleTextOrCategory;
  originalTitleText: NameTextOrCompanyTextOrTitleTextOrOriginalTitleTextOrCategory;
  releaseYear: ReleaseYear1;
  reviews: ImagesOrVideosOrExternalLinksOrCreditsOrReviewsOrCriticReviewsTotalOrTriviaTotalOrSubNavCreditsOrSubNavReviewsOrSubNavTriviaOrWinsOrNominationsOrGoofsTotalOrQuotesTotalOrFaqsTotalOrCompanies;
  featuredReviews: PrimaryVideosOrFeaturedReviewsOrVideoStripOrMoreLikeThisTitlesOrTriviaOrGoofsOrQuotesOrCrazyCreditsOrConnectionsOrSoundtrackOrFaqsOrAkas;
  canRate: CanRate;
  iframeAddReviewLink: PlotContributionLinkOrContributionLinkOrImageUploadLinkOrIframeAddReviewLink;
  faqsTotal: ImagesOrVideosOrExternalLinksOrCreditsOrReviewsOrCriticReviewsTotalOrTriviaTotalOrSubNavCreditsOrSubNavReviewsOrSubNavTriviaOrWinsOrNominationsOrGoofsTotalOrQuotesTotalOrFaqsTotalOrCompanies;
  faqs: PrimaryVideosOrFeaturedReviewsOrVideoStripOrMoreLikeThisTitlesOrTriviaOrGoofsOrQuotesOrCrazyCreditsOrConnectionsOrSoundtrackOrFaqsOrAkas;
  releaseDate: ReleaseDate1;
  countriesOfOrigin: CountriesOfOrigin1;
  detailsExternalLinks: KeywordsOrTitleMainImagesOrAlternateVersionsOrDetailsExternalLinksOrFilmingLocations;
  spokenLanguages: SpokenLanguages;
  akas: PrimaryVideosOrFeaturedReviewsOrVideoStripOrMoreLikeThisTitlesOrTriviaOrGoofsOrQuotesOrCrazyCreditsOrConnectionsOrSoundtrackOrFaqsOrAkas;
  filmingLocations: KeywordsOrTitleMainImagesOrAlternateVersionsOrDetailsExternalLinksOrFilmingLocations;
  production: Production;
  companies: ImagesOrVideosOrExternalLinksOrCreditsOrReviewsOrCriticReviewsTotalOrTriviaTotalOrSubNavCreditsOrSubNavReviewsOrSubNavTriviaOrWinsOrNominationsOrGoofsTotalOrQuotesTotalOrFaqsTotalOrCompanies;
  productionBudget?: null;
  lifetimeGross?: null;
  openingWeekendGross?: null;
  worldwideGross?: null;
  technicalSpecifications: TechnicalSpecifications;
  runtime: Runtime1;
  series?: null;
  canHaveEpisodes: boolean;
  contributionQuestions: ContributionQuestions;
  __typename: string;
}
export interface RatingsSummary1 {
  topRanking?: null;
  __typename: string;
}
export interface TitleType1 {
  id: string;
  canHaveEpisodes: boolean;
  __typename: string;
}
export interface Cast {
  edges?: (EdgesEntity2)[] | null;
  __typename: string;
}
export interface EdgesEntity2 {
  node: Node1;
  __typename: string;
}
export interface Node1 {
  name: Name2;
  attributes?: null;
  category: LanguageOrCountriesEntityOrCategory;
  characters?: null;
  episodeCredits: EpisodeCredits;
  __typename: string;
}
export interface Name2 {
  id: string;
  nameText: NameTextOrCompanyTextOrTitleTextOrOriginalTitleTextOrCategory;
  primaryImage?: null;
  __typename: string;
}
export interface EpisodeCredits {
  total: number;
  yearRange?: null;
  __typename: string;
}
export interface DirectorsEntityOrWritersEntity {
  totalCredits: number;
  category: NameTextOrCompanyTextOrTitleTextOrOriginalTitleTextOrCategory;
  credits?: (CreditsEntity)[] | null;
  __typename: string;
}
export interface ReleaseYear1 {
  year: number;
  __typename: string;
}
export interface ReleaseDate1 {
  day: number;
  month: number;
  year: number;
  country: StatusOrCurrentProductionStageOrGenresEntityOrCategoryOrCountryOrCountriesEntityOrSpokenLanguagesEntity;
  __typename: string;
}
export interface CountriesOfOrigin1 {
  countries?: (StatusOrCurrentProductionStageOrGenresEntityOrCategoryOrCountryOrCountriesEntityOrSpokenLanguagesEntity)[] | null;
  __typename: string;
}
export interface SpokenLanguages {
  spokenLanguages?: (StatusOrCurrentProductionStageOrGenresEntityOrCategoryOrCountryOrCountriesEntityOrSpokenLanguagesEntity)[] | null;
  __typename: string;
}
export interface TechnicalSpecifications {
  soundMixes: SoundMixesOrAspectRatios;
  aspectRatios: SoundMixesOrAspectRatios;
  colorations: Colorations;
  __typename: string;
}
export interface SoundMixesOrAspectRatios {
  items?: (null)[] | null;
  __typename: string;
}
export interface Colorations {
  items?: (ItemsEntity)[] | null;
  __typename: string;
}
export interface ItemsEntity {
  conceptId: string;
  text: string;
  attributes?: (null)[] | null;
  __typename: string;
}
export interface Runtime1 {
  seconds: number;
  __typename: string;
}
export interface ContributionQuestions {
  contributionLink: PlotContributionLinkOrContributionLinkOrImageUploadLinkOrIframeAddReviewLink;
  edges?: (null)[] | null;
  __typename: string;
}
