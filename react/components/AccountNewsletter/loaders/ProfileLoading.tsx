import React from 'react'
import { SkeletonPiece, SkeletonBox} from 'vtex.my-account-commons'

// import { headerConfig } from '../NewsletterPreferences'


const ProfileLoading = () => {
  return (
    <main className="flex flex-column-s flex-row-ns">
      <div className="w-60-ns w-100-s">
        <SkeletonBox shouldAllowGrowing shouldShowLowerButton>
          <div className="flex flex-wrap mb8 justify-between w5">
            <SkeletonPiece width="40" size="4" />
            <SkeletonPiece width="50" size="4" />
          </div>
          <div className="mb8">
            <SkeletonPiece size="4" />
          </div>
          <div className="flex flex-wrap mb8 justify-between">
            <SkeletonPiece width="30" size="4" />
            <SkeletonPiece width="50" size="4" />
          </div>
          <div className="flex flex-wrap mb8 justify-between">
            <SkeletonPiece width="40" size="4" />
            <SkeletonPiece width="50" size="4" />
          </div>
        </SkeletonBox>
      </div>
      <div className="w-40-ns w-100-s">
        <SkeletonBox shouldAllowGrowing shouldShowLowerButton>
          <SkeletonPiece size="4" />
        </SkeletonBox>
        <SkeletonBox shouldAllowGrowing shouldShowLowerButton>
          <SkeletonPiece size="4" />
        </SkeletonBox>
      </div>
    </main>
  )
}

export default ProfileLoading
