import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};



export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type BlogPost = {
  __typename?: 'BlogPost';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  postDate: Scalars['DateTime'];
  featured: Scalars['Boolean'];
  headerPhoto?: Maybe<UploadFile>;
  slug: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
};

export type BlogPostConnection = {
  __typename?: 'BlogPostConnection';
  values?: Maybe<Array<Maybe<BlogPost>>>;
  groupBy?: Maybe<BlogPostGroupBy>;
  aggregate?: Maybe<BlogPostAggregator>;
};

export type BlogPostAggregator = {
  __typename?: 'BlogPostAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type BlogPostGroupBy = {
  __typename?: 'BlogPostGroupBy';
  id?: Maybe<Array<Maybe<BlogPostConnectionId>>>;
  created_at?: Maybe<Array<Maybe<BlogPostConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<BlogPostConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<BlogPostConnectionTitle>>>;
  content?: Maybe<Array<Maybe<BlogPostConnectionContent>>>;
  postDate?: Maybe<Array<Maybe<BlogPostConnectionPostDate>>>;
  featured?: Maybe<Array<Maybe<BlogPostConnectionFeatured>>>;
  headerPhoto?: Maybe<Array<Maybe<BlogPostConnectionHeaderPhoto>>>;
  slug?: Maybe<Array<Maybe<BlogPostConnectionSlug>>>;
  published_at?: Maybe<Array<Maybe<BlogPostConnectionPublished_At>>>;
};

export type BlogPostConnectionId = {
  __typename?: 'BlogPostConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BlogPostConnection>;
};

export type BlogPostConnectionCreated_At = {
  __typename?: 'BlogPostConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BlogPostConnection>;
};

export type BlogPostConnectionUpdated_At = {
  __typename?: 'BlogPostConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BlogPostConnection>;
};

export type BlogPostConnectionTitle = {
  __typename?: 'BlogPostConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BlogPostConnection>;
};

export type BlogPostConnectionContent = {
  __typename?: 'BlogPostConnectionContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BlogPostConnection>;
};

export type BlogPostConnectionPostDate = {
  __typename?: 'BlogPostConnectionPostDate';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BlogPostConnection>;
};

export type BlogPostConnectionFeatured = {
  __typename?: 'BlogPostConnectionFeatured';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<BlogPostConnection>;
};

export type BlogPostConnectionHeaderPhoto = {
  __typename?: 'BlogPostConnectionHeaderPhoto';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BlogPostConnection>;
};

export type BlogPostConnectionSlug = {
  __typename?: 'BlogPostConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BlogPostConnection>;
};

export type BlogPostConnectionPublished_At = {
  __typename?: 'BlogPostConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BlogPostConnection>;
};

export type BlogPostInput = {
  title?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  postDate: Scalars['DateTime'];
  featured?: Maybe<Scalars['Boolean']>;
  headerPhoto?: Maybe<Scalars['ID']>;
  slug: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditBlogPostInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  postDate?: Maybe<Scalars['DateTime']>;
  featured?: Maybe<Scalars['Boolean']>;
  headerPhoto?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateBlogPostInput = {
  data?: Maybe<BlogPostInput>;
};

export type CreateBlogPostPayload = {
  __typename?: 'createBlogPostPayload';
  blogPost?: Maybe<BlogPost>;
};

export type UpdateBlogPostInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditBlogPostInput>;
};

export type UpdateBlogPostPayload = {
  __typename?: 'updateBlogPostPayload';
  blogPost?: Maybe<BlogPost>;
};

export type DeleteBlogPostInput = {
  where?: Maybe<InputId>;
};

export type DeleteBlogPostPayload = {
  __typename?: 'deleteBlogPostPayload';
  blogPost?: Maybe<BlogPost>;
};

export type Blogs = {
  __typename?: 'Blogs';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  primaryPhoto?: Maybe<UploadFile>;
  content: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type BlogsConnection = {
  __typename?: 'BlogsConnection';
  values?: Maybe<Array<Maybe<Blogs>>>;
  groupBy?: Maybe<BlogsGroupBy>;
  aggregate?: Maybe<BlogsAggregator>;
};

export type BlogsAggregator = {
  __typename?: 'BlogsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type BlogsGroupBy = {
  __typename?: 'BlogsGroupBy';
  id?: Maybe<Array<Maybe<BlogsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<BlogsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<BlogsConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<BlogsConnectionTitle>>>;
  subtitle?: Maybe<Array<Maybe<BlogsConnectionSubtitle>>>;
  primaryPhoto?: Maybe<Array<Maybe<BlogsConnectionPrimaryPhoto>>>;
  content?: Maybe<Array<Maybe<BlogsConnectionContent>>>;
  url?: Maybe<Array<Maybe<BlogsConnectionUrl>>>;
  published_at?: Maybe<Array<Maybe<BlogsConnectionPublished_At>>>;
};

export type BlogsConnectionId = {
  __typename?: 'BlogsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BlogsConnection>;
};

export type BlogsConnectionCreated_At = {
  __typename?: 'BlogsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BlogsConnection>;
};

export type BlogsConnectionUpdated_At = {
  __typename?: 'BlogsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BlogsConnection>;
};

export type BlogsConnectionTitle = {
  __typename?: 'BlogsConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BlogsConnection>;
};

export type BlogsConnectionSubtitle = {
  __typename?: 'BlogsConnectionSubtitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BlogsConnection>;
};

export type BlogsConnectionPrimaryPhoto = {
  __typename?: 'BlogsConnectionPrimaryPhoto';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BlogsConnection>;
};

export type BlogsConnectionContent = {
  __typename?: 'BlogsConnectionContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BlogsConnection>;
};

export type BlogsConnectionUrl = {
  __typename?: 'BlogsConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BlogsConnection>;
};

export type BlogsConnectionPublished_At = {
  __typename?: 'BlogsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BlogsConnection>;
};

export type BlogInput = {
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  primaryPhoto?: Maybe<Scalars['ID']>;
  content: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditBlogInput = {
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  primaryPhoto?: Maybe<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateBlogInput = {
  data?: Maybe<BlogInput>;
};

export type CreateBlogPayload = {
  __typename?: 'createBlogPayload';
  blog?: Maybe<Blogs>;
};

export type UpdateBlogInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditBlogInput>;
};

export type UpdateBlogPayload = {
  __typename?: 'updateBlogPayload';
  blog?: Maybe<Blogs>;
};

export type DeleteBlogInput = {
  where?: Maybe<InputId>;
};

export type DeleteBlogPayload = {
  __typename?: 'deleteBlogPayload';
  blog?: Maybe<Blogs>;
};

export type BoardGames = {
  __typename?: 'BoardGames';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  primaryPhoto?: Maybe<UploadFile>;
  content: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<ComponentExtrasButton>>>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type BoardGamesConnection = {
  __typename?: 'BoardGamesConnection';
  values?: Maybe<Array<Maybe<BoardGames>>>;
  groupBy?: Maybe<BoardGamesGroupBy>;
  aggregate?: Maybe<BoardGamesAggregator>;
};

export type BoardGamesAggregator = {
  __typename?: 'BoardGamesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type BoardGamesGroupBy = {
  __typename?: 'BoardGamesGroupBy';
  id?: Maybe<Array<Maybe<BoardGamesConnectionId>>>;
  created_at?: Maybe<Array<Maybe<BoardGamesConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<BoardGamesConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<BoardGamesConnectionTitle>>>;
  subtitle?: Maybe<Array<Maybe<BoardGamesConnectionSubtitle>>>;
  primaryPhoto?: Maybe<Array<Maybe<BoardGamesConnectionPrimaryPhoto>>>;
  content?: Maybe<Array<Maybe<BoardGamesConnectionContent>>>;
  status?: Maybe<Array<Maybe<BoardGamesConnectionStatus>>>;
  published_at?: Maybe<Array<Maybe<BoardGamesConnectionPublished_At>>>;
};

export type BoardGamesConnectionId = {
  __typename?: 'BoardGamesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BoardGamesConnection>;
};

export type BoardGamesConnectionCreated_At = {
  __typename?: 'BoardGamesConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BoardGamesConnection>;
};

export type BoardGamesConnectionUpdated_At = {
  __typename?: 'BoardGamesConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BoardGamesConnection>;
};

export type BoardGamesConnectionTitle = {
  __typename?: 'BoardGamesConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BoardGamesConnection>;
};

export type BoardGamesConnectionSubtitle = {
  __typename?: 'BoardGamesConnectionSubtitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BoardGamesConnection>;
};

export type BoardGamesConnectionPrimaryPhoto = {
  __typename?: 'BoardGamesConnectionPrimaryPhoto';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BoardGamesConnection>;
};

export type BoardGamesConnectionContent = {
  __typename?: 'BoardGamesConnectionContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BoardGamesConnection>;
};

export type BoardGamesConnectionStatus = {
  __typename?: 'BoardGamesConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BoardGamesConnection>;
};

export type BoardGamesConnectionPublished_At = {
  __typename?: 'BoardGamesConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BoardGamesConnection>;
};

export type BoardGameInput = {
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  primaryPhoto?: Maybe<Scalars['ID']>;
  content: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<ComponentExtrasButtonInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditBoardGameInput = {
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  primaryPhoto?: Maybe<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<EditComponentExtrasButtonInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateBoardGameInput = {
  data?: Maybe<BoardGameInput>;
};

export type CreateBoardGamePayload = {
  __typename?: 'createBoardGamePayload';
  boardGame?: Maybe<BoardGames>;
};

export type UpdateBoardGameInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditBoardGameInput>;
};

export type UpdateBoardGamePayload = {
  __typename?: 'updateBoardGamePayload';
  boardGame?: Maybe<BoardGames>;
};

export type DeleteBoardGameInput = {
  where?: Maybe<InputId>;
};

export type DeleteBoardGamePayload = {
  __typename?: 'deleteBoardGamePayload';
  boardGame?: Maybe<BoardGames>;
};

export type DevelopmentProjects = {
  __typename?: 'DevelopmentProjects';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  primaryPhoto?: Maybe<UploadFile>;
  content: Scalars['String'];
  status: Scalars['String'];
  buttons?: Maybe<Array<Maybe<ComponentExtrasButton>>>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type DevelopmentProjectsConnection = {
  __typename?: 'DevelopmentProjectsConnection';
  values?: Maybe<Array<Maybe<DevelopmentProjects>>>;
  groupBy?: Maybe<DevelopmentProjectsGroupBy>;
  aggregate?: Maybe<DevelopmentProjectsAggregator>;
};

export type DevelopmentProjectsAggregator = {
  __typename?: 'DevelopmentProjectsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DevelopmentProjectsGroupBy = {
  __typename?: 'DevelopmentProjectsGroupBy';
  id?: Maybe<Array<Maybe<DevelopmentProjectsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<DevelopmentProjectsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<DevelopmentProjectsConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<DevelopmentProjectsConnectionTitle>>>;
  subtitle?: Maybe<Array<Maybe<DevelopmentProjectsConnectionSubtitle>>>;
  primaryPhoto?: Maybe<Array<Maybe<DevelopmentProjectsConnectionPrimaryPhoto>>>;
  content?: Maybe<Array<Maybe<DevelopmentProjectsConnectionContent>>>;
  status?: Maybe<Array<Maybe<DevelopmentProjectsConnectionStatus>>>;
  published_at?: Maybe<Array<Maybe<DevelopmentProjectsConnectionPublished_At>>>;
};

export type DevelopmentProjectsConnectionId = {
  __typename?: 'DevelopmentProjectsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<DevelopmentProjectsConnection>;
};

export type DevelopmentProjectsConnectionCreated_At = {
  __typename?: 'DevelopmentProjectsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<DevelopmentProjectsConnection>;
};

export type DevelopmentProjectsConnectionUpdated_At = {
  __typename?: 'DevelopmentProjectsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<DevelopmentProjectsConnection>;
};

export type DevelopmentProjectsConnectionTitle = {
  __typename?: 'DevelopmentProjectsConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<DevelopmentProjectsConnection>;
};

export type DevelopmentProjectsConnectionSubtitle = {
  __typename?: 'DevelopmentProjectsConnectionSubtitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<DevelopmentProjectsConnection>;
};

export type DevelopmentProjectsConnectionPrimaryPhoto = {
  __typename?: 'DevelopmentProjectsConnectionPrimaryPhoto';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<DevelopmentProjectsConnection>;
};

export type DevelopmentProjectsConnectionContent = {
  __typename?: 'DevelopmentProjectsConnectionContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<DevelopmentProjectsConnection>;
};

export type DevelopmentProjectsConnectionStatus = {
  __typename?: 'DevelopmentProjectsConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<DevelopmentProjectsConnection>;
};

export type DevelopmentProjectsConnectionPublished_At = {
  __typename?: 'DevelopmentProjectsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<DevelopmentProjectsConnection>;
};

export type DevelopmentProjectInput = {
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  primaryPhoto?: Maybe<Scalars['ID']>;
  content: Scalars['String'];
  status: Scalars['String'];
  buttons?: Maybe<Array<Maybe<ComponentExtrasButtonInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditDevelopmentProjectInput = {
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  primaryPhoto?: Maybe<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<EditComponentExtrasButtonInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateDevelopmentProjectInput = {
  data?: Maybe<DevelopmentProjectInput>;
};

export type CreateDevelopmentProjectPayload = {
  __typename?: 'createDevelopmentProjectPayload';
  developmentProject?: Maybe<DevelopmentProjects>;
};

export type UpdateDevelopmentProjectInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditDevelopmentProjectInput>;
};

export type UpdateDevelopmentProjectPayload = {
  __typename?: 'updateDevelopmentProjectPayload';
  developmentProject?: Maybe<DevelopmentProjects>;
};

export type DeleteDevelopmentProjectInput = {
  where?: Maybe<InputId>;
};

export type DeleteDevelopmentProjectPayload = {
  __typename?: 'deleteDevelopmentProjectPayload';
  developmentProject?: Maybe<DevelopmentProjects>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type ComponentExtrasButton = {
  __typename?: 'ComponentExtrasButton';
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentExtrasButtonInput = {
  text?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type EditComponentExtrasButtonInput = {
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | BlogPost | BlogPostConnection | BlogPostAggregator | BlogPostGroupBy | BlogPostConnectionId | BlogPostConnectionCreated_At | BlogPostConnectionUpdated_At | BlogPostConnectionTitle | BlogPostConnectionContent | BlogPostConnectionPostDate | BlogPostConnectionFeatured | BlogPostConnectionHeaderPhoto | BlogPostConnectionSlug | BlogPostConnectionPublished_At | CreateBlogPostPayload | UpdateBlogPostPayload | DeleteBlogPostPayload | Blogs | BlogsConnection | BlogsAggregator | BlogsGroupBy | BlogsConnectionId | BlogsConnectionCreated_At | BlogsConnectionUpdated_At | BlogsConnectionTitle | BlogsConnectionSubtitle | BlogsConnectionPrimaryPhoto | BlogsConnectionContent | BlogsConnectionUrl | BlogsConnectionPublished_At | CreateBlogPayload | UpdateBlogPayload | DeleteBlogPayload | BoardGames | BoardGamesConnection | BoardGamesAggregator | BoardGamesGroupBy | BoardGamesConnectionId | BoardGamesConnectionCreated_At | BoardGamesConnectionUpdated_At | BoardGamesConnectionTitle | BoardGamesConnectionSubtitle | BoardGamesConnectionPrimaryPhoto | BoardGamesConnectionContent | BoardGamesConnectionStatus | BoardGamesConnectionPublished_At | CreateBoardGamePayload | UpdateBoardGamePayload | DeleteBoardGamePayload | DevelopmentProjects | DevelopmentProjectsConnection | DevelopmentProjectsAggregator | DevelopmentProjectsGroupBy | DevelopmentProjectsConnectionId | DevelopmentProjectsConnectionCreated_At | DevelopmentProjectsConnectionUpdated_At | DevelopmentProjectsConnectionTitle | DevelopmentProjectsConnectionSubtitle | DevelopmentProjectsConnectionPrimaryPhoto | DevelopmentProjectsConnectionContent | DevelopmentProjectsConnectionStatus | DevelopmentProjectsConnectionPublished_At | CreateDevelopmentProjectPayload | UpdateDevelopmentProjectPayload | DeleteDevelopmentProjectPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentExtrasButton;

export type InputId = {
  id: Scalars['ID'];
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  blogPost?: Maybe<BlogPost>;
  blogPosts?: Maybe<Array<Maybe<BlogPost>>>;
  blogPostsConnection?: Maybe<BlogPostConnection>;
  blog?: Maybe<Blogs>;
  blogs?: Maybe<Array<Maybe<Blogs>>>;
  blogsConnection?: Maybe<BlogsConnection>;
  boardGame?: Maybe<BoardGames>;
  boardGames?: Maybe<Array<Maybe<BoardGames>>>;
  boardGamesConnection?: Maybe<BoardGamesConnection>;
  developmentProject?: Maybe<DevelopmentProjects>;
  developmentProjects?: Maybe<Array<Maybe<DevelopmentProjects>>>;
  developmentProjectsConnection?: Maybe<DevelopmentProjectsConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryBlogPostArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryBlogPostsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryBlogPostsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryBlogArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryBlogsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryBlogsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryBoardGameArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryBoardGamesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryBoardGamesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryDevelopmentProjectArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryDevelopmentProjectsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryDevelopmentProjectsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBlogPost?: Maybe<CreateBlogPostPayload>;
  updateBlogPost?: Maybe<UpdateBlogPostPayload>;
  deleteBlogPost?: Maybe<DeleteBlogPostPayload>;
  createBlog?: Maybe<CreateBlogPayload>;
  updateBlog?: Maybe<UpdateBlogPayload>;
  deleteBlog?: Maybe<DeleteBlogPayload>;
  createBoardGame?: Maybe<CreateBoardGamePayload>;
  updateBoardGame?: Maybe<UpdateBoardGamePayload>;
  deleteBoardGame?: Maybe<DeleteBoardGamePayload>;
  createDevelopmentProject?: Maybe<CreateDevelopmentProjectPayload>;
  updateDevelopmentProject?: Maybe<UpdateDevelopmentProjectPayload>;
  deleteDevelopmentProject?: Maybe<DeleteDevelopmentProjectPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateBlogPostArgs = {
  input?: Maybe<CreateBlogPostInput>;
};


export type MutationUpdateBlogPostArgs = {
  input?: Maybe<UpdateBlogPostInput>;
};


export type MutationDeleteBlogPostArgs = {
  input?: Maybe<DeleteBlogPostInput>;
};


export type MutationCreateBlogArgs = {
  input?: Maybe<CreateBlogInput>;
};


export type MutationUpdateBlogArgs = {
  input?: Maybe<UpdateBlogInput>;
};


export type MutationDeleteBlogArgs = {
  input?: Maybe<DeleteBlogInput>;
};


export type MutationCreateBoardGameArgs = {
  input?: Maybe<CreateBoardGameInput>;
};


export type MutationUpdateBoardGameArgs = {
  input?: Maybe<UpdateBoardGameInput>;
};


export type MutationDeleteBoardGameArgs = {
  input?: Maybe<DeleteBoardGameInput>;
};


export type MutationCreateDevelopmentProjectArgs = {
  input?: Maybe<CreateDevelopmentProjectInput>;
};


export type MutationUpdateDevelopmentProjectArgs = {
  input?: Maybe<UpdateDevelopmentProjectInput>;
};


export type MutationDeleteDevelopmentProjectArgs = {
  input?: Maybe<DeleteDevelopmentProjectInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};







export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = (
  { __typename?: 'Query' }
  & { blogPosts?: Maybe<Array<Maybe<(
    { __typename?: 'BlogPost' }
    & Pick<BlogPost, 'id' | 'postDate' | 'title' | 'featured' | 'slug'>
    & { headerPhoto?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'name'>
    )> }
  )>>> }
);

export type SinglePostQueryVariables = Exact<{
  whereClause: Scalars['JSON'];
}>;


export type SinglePostQuery = (
  { __typename?: 'Query' }
  & { blogPosts?: Maybe<Array<Maybe<(
    { __typename?: 'BlogPost' }
    & Pick<BlogPost, 'id' | 'created_at' | 'published_at' | 'updated_at' | 'postDate' | 'content' | 'title' | 'featured' | 'slug'>
    & { headerPhoto?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'name'>
    )> }
  )>>> }
);

export const PostsDocument = gql`
    query posts {
  blogPosts(sort: "postDate:desc") {
    id
    headerPhoto {
      id
      name
    }
    postDate
    title
    featured
    slug
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PostsGQL extends Apollo.Query<PostsQuery, PostsQueryVariables> {
    document = PostsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SinglePostDocument = gql`
    query singlePost($whereClause: JSON!) {
  blogPosts(where: $whereClause, limit: 1) {
    id
    headerPhoto {
      id
      name
    }
    created_at
    published_at
    updated_at
    postDate
    content
    title
    featured
    slug
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SinglePostGQL extends Apollo.Query<SinglePostQuery, SinglePostQueryVariables> {
    document = SinglePostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }